console.log("Sanity check- bucketlist SHOW");

let userName = window.location.pathname.split('/')[2];

$(document).ready(function() {
	
	$.ajax({
	method: "GET",
	url: `http://localhost:4000/api/v1/bucketlist/${userName}`,
	success: function(res) {
	    renderBucketlist(res);
	},
	error: (err) => {
	    console.log(err);
	},
});
});


function renderBucketlist(bucketlist) {
	$("#nameHome").append(`<h1>${userName}'s Bucketlist:</h1>`);
	$("header").append(`<p hidden class="hiddenId" id=${bucketlist._id}></p>`);

	console.log("testing");
	bucketlist.bucketlist.forEach(donutStore => {
		$("#left-column").append(`${donutCard(donutStore)}`)
	});
	// for testing event listener
	// donutCard();
	bucketlist.visitedStores.forEach(donutStore => {
		$("#right-column").append(`${donutCardVisited(donutStore)}`)
	});
};

// for testing even listener
// function donutCard(donutStore) {
// 	let button = document.createElement("BUTTON");
// 	button.innerHTML = "click me";
// 	button.className = "test"
// 	document.body.appendChild(button);
// }

function donutCard(donutStore) {

return `<div class = "card text-left mb-3" style= "min-width:15rem; max-width:15rem;">
<button type="button" class="closeBtn close text-left ml-3 text-danger" id=${donutStore._id} aria-label="Close">x
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
		    <button type="button" class="doughnitBtn btn btn-primary btn-sm btn-success position-relative mid-center btn-block" id=${donutStore._id}>DOUGHNIT!</button>
		</div>
	</div>
</div>
    `;
};

function donutCardVisited(donutStore) {

	return `<div class = "card text-left mb-3" style= "min-width:15rem; max-width:15rem;">
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
