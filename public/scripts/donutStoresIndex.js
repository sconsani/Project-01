console.log("Sanity check - donustore INDEX");

$(document).ready(function(){

    function getDonutstores() {
    $.ajax({
    method: "GET",
    url: "https://safe-beyond-05848.herokuapp.com/api/v1/donutstores",
    success: function(res) {
        renderHomePage(res);
    },
    error: function(err) {
    }
 });
}

function renderHomePage(donutStores) {
    donutStores.forEach((donutStore) => {
        $(".card-deck").append(`${donutCard(donutStore)}`);
    })
};

function donutCard(donutStore) {
    return `<div class = "card mb-3" style= "min-width:15rem; max-width:15rem;">
        <img class = "card-img-top" src = "${donutStore.photo.photo_reference}" alt = "donut image" style = "width: 100%;
    height: 15vw; object-fit: cover;">
        <div class = "card-body">
            <h5 class = "card-title">${donutStore.name}</h5>
        <ul class = "list-group list-group-flush">
            <li class = "list-group-item">${donutStore.formatted_address}</li>
            <li class = "list-group-item">${donutStore.weekday_text}</li>
            <li class = "list-group-item">Rating: ${donutStore.rating} <br></br>Times Added: ${donutStore.bucketlists.length}
            </li>
        </ul>
        <div class = "card-body">
            <button type="button" class="add btn btn-danger position-relative mid-center" id=${donutStore._id}>Add to Bucketlist</button>
        </div>
        </div>
 </div>
        `;
}

getDonutstores();
});