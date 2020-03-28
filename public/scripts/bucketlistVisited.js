console.log("Sanity Check- bucket list VISITED");

//enter document.ready function
$(document).ready(function() {
//on doughnit click
	$(".doughnitbtn").on("click", function(event) {
//enter ajax call
		$.ajax({
			//"GET" or "PUT"
			//what is the correct route we are calling
		        method: "PUT",
		        url: `http://localhost:4000/api/v1/bucketlist/:bucketlistId/donutstores/:donutstoreId`;
		        success: (success)=> {
		            console.log(success);
		            //renderVisited template
		        },
		        error: (err) => {
		        console.log(err);
		        }
		    });

//on success
function renderVisited(bucketlist) {
	//do we need this again here too?
	$("header").append(`<p hidden class="hiddenId" id=${bucketlist._id}></p>`);

	//for each donut store in bucketlist of user's bucketlist append the template (card)
	bucketlist.bucketlist.forEach(donutStore => {
		$("#right-column").append(`${donutCard(donutStore)}`)
	});
    };


function donutCard(donutStore) {

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
    <button type="button" class="add btn btn-primary btn-sm btn-success position-relative mid-center btn-block" style = "font-family: 'Fredoka One', cursive;" id=${donutStore._id}>DOUGHNIT!</button>
    </div>
</div>
</div>
    `;
};

