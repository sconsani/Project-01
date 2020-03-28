console.log("Sanity Check- bucketlist VISITED");

$(document).ready(function() {
//on doughnit click
	$(".visited").on("click", function(event) {
        let visitedBtn = event.target;
        console.log("Console logging visitedBtn", visitedBtnBtn);
        let donutStoreId = event.target.id;
        // console.log("Console logging event", event);
        let bucketlistId = document.getElementsByClassName("hiddenId")[0].id;
        visitedBtn.style.backgroundColor = "Gray";
        visitedBtn.style.color = "black"
        visitedBtn.disabled = true;

		// function getVisitedStores() { 
		$.ajax({
		method: "PUT",
		url: `http://localhost:4000/api/v1/bucketlist/${bucketlistId}/donutstores/${donutStoreId}`,
		success: function(res) {
			renderStores(res);
		},
		error: (err) => {
			console.log(err);
		}
		});
	// }
	})
});


//on success - //is this bucketlist again here?
function renderStores(bucketlist) {
	console.log("which object is this", bucketlist);
	//for each donut store in bucketlist append the template (card)
	bucketlist.bucketlist.forEach(donutStore => {
		$("#left-column").append(`${donutCard(donutStore)}`)
	})
	bucketlist.visitedStores.forEach(donutStore => {
		$("#right-column").append(`${donutCardVisited(donutStore)}`);
	})
};

function donutCard(donutStore) {

return `<div class = "card text-left mb-3" style= "min-width:15rem; max-width:15rem;">
<button type="button" class="doughnitbtn close text-left ml-3 text-danger" id=${donutStore._id} aria-label="Close">x
</button>
<img class = "card-img-top" src = "${donutStore.photo.photo_reference}" alt = "donut image"
style = "width: 100%; height: 15vw; object-fit: cover;">
	<div class = "card-body">
		<h5 class = "card-title mb-0">${donutStore.name}</h5>
			<ul class = "list-group list-group-flush">
			    <li class = "list-group-item">${donutStore.formatted_address}</li>
			    <li class = "list-group-item">${donutStore.rating}</li>
			    <li class = "list-group-item">${donutStore.weekday_text}</li>
			</ul>
		<div class = "card-body">
		    <button type="button" class="visited btn btn-primary btn-sm btn-success position-relative mid-center btn-block" id=${donutStore._id}>DOUGHNIT!</button>
		</div>
	</div>
</div>
    `;
};


function donutCardVisited(donutStore) {

return `<div class = "card mb-3" style= "min-width:15rem; max-width:15rem;">
<img class = "card-img-top" src = "${donutStore.photo.photo_reference}" alt = "donut image"
style = "width: 100%; height: 15vw; object-fit: cover;">
	<div class = "card-body">
	    <h5 class = "card-title mb-0">${donutStore.name}</h5>
			<ul class = "list-group list-group-flush">
			    <li class = "list-group-item">${donutStore.formatted_address}</li>
			    <li class = "list-group-item">${donutStore.rating}</li>
			    <li class = "list-group-item">${donutStore.weekday_text}</li>
			</ul>
	    <div class = "card-body">
			<h5 class = "card-title position-relative mid-center">You've Doughnit!</h5>
		</div>
	</div>
</div>
    `;
};
//note: im not sure what bootstrap class properties the new h5 tag needs for "you've doughnit" to get it centered until we see it
