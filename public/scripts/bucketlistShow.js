console.log("Sanity Check- bucket list show");

let userName = window.location.pathname.split('/')[2];

$(document).ready(function() {
	
	console.log(userName);

	// let userName = document.getElementById("username").value;

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
	$(".nameHone").append(`<h1>${userName}'s Bucketlist</h1>`);

	// console.log("testing");
	bucketlist.bucketlist.forEach(donutStore => {
		$("#left-column").append(`${donutCard(donutStore)}`)
	});
    };


function donutCard(donutStore) {

return `<div class = "card mb-3" style= "min-width:15rem; max-width:15rem;">
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
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
	<button type="button" class="add btn btn-primary btn-sm btn-success position-absolute mid-center" id=${donutStore._id}>DOUGHNIT</button>
	<button type="button" class="add btn btn-secondary btn-sm btn-outline-danger position-absolute mid-center" id=${donutStore._id}>Remove</button>
	</div>
</div>
</div>
    `;
};

