console.log("Sanity Check- bucket list show");

$(document).ready(function() {
	
	let userName = window.location.pathname.split('/')[2];
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

function renderBucketlist(donutStore) {
    $("#left-column").append(`${donutCard(donutStore)}`)
    $(".nameHone").append('<h1>${userName}</h1>');
    };


function donutCard(donutStore) {
return `<div class = "card" style= "width: 18rem;">
<img class = "card-img-top" src = "${donutStore.photo.photo_reference}" alt = "test">
<div class = "card-body">
    <h5 class = "card-title">${donutStore.name}</h5>
</div>
<ul class = "list-group list-group-flush">
    <li class = "list-group-item">${donutStore.formatted_address}</li>
    <li class = "list-group-item">${donutStore.rating}</li>
    <li class = "list-group-item">${donutStore.weekday_text}</li>
</ul>
<div class = "card-body">
<button type="button" class="add btn btn-success position-absolute mid-center" id=${donutStore._id}>DOUGHNIT</button>
<button type="button" class="add btn btn-dark position-absolute mid-center" id=${donutStore._id}>DOUGHNIT</button>
</div>
</div>
    `;
};

