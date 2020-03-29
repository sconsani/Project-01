console.log("Sanity Check - bucketlist VISITED");

let doughnitBtn;
	$("#left-column").on("click", function(event) {
	// $("#doughnitBtn").on("click", function(event) {
        doughnitBtn = event.target;
        // console.log("Console logging doughnit button", doughnitBtn);
        let donutStoreId = event.target.id;
		let bucketlistId = document.getElementsByClassName("hiddenId")[0].id;

		$.ajax({
		method: "GET",
		url: `http://localhost:4000/api/v1/bucketlist/${bucketlistId}/donutstores/${donutStoreId}`,
		success: function(res) {
			renderStores(res);
		},
		error: (err) => {
			console.log(err);
		}
		});	
	});



function renderStores(donutStore) {
	doughnitBtn.style.backgroundColor = "Gray";
	doughnitBtn.style.color = "black"
	doughnitBtn.disabled = true;
	$("#right-column").append(`${donutCardVisited(donutStore)}`);
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
