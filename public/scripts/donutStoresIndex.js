console.log("Sanity check!");

$(document).ready(function(){

    function getDonutStores() {
    $.ajax({
    method: "GET",
    url: "http://localhost:4000/api/v1/donutStores",
    success: function(res) {
        renderHomePage(res);
    },
    error: function(err) {
        console.log(err);
    }
 });
}

function renderHomePage(donutStores) {
    donutStores.forEach((donutStore) => {
        $(".card-deck").append(`${donutCard(donutStore)}`);
    });
};

function donutCard(donutStore) {
 return `<div class = "card" style= "width: 18rem;">
        <img class = "card-img-top" src = "${donutStore.photo_reference}" alt = "test">
        <div class = "card-body">
            <h5 class = "card-title">${donutStore.name}</h5>
        </div>
        <ul class = "list-group list-group-flush">
            <li class = "list-group-item">${donutStore.formatted_address}</li>
            <li class = "list-group-item">${donutStore.weekday_text}</li>
            <li class = "list-group-item">${donutStore.rating}</li>
        </ul>
        <div class = "card-body">
            <a href="#" class="btn btn-primary bg-danger">Add to Bucketlist</a>
        </div>
        </div>`;
}
getDonutStores();
});