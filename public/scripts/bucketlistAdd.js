// need to handle adding stores to bucketlist, removing stores from bucketlist, and dougnnit
console.log("Sanity check - bucketlistUpdate")

$(document).ready(function() {

    $(".card-deck").on("click", function(event) {
        let addBtn = event.target;
        // console.log("Console logging addBtn", addBtn);
        let donutStoreId = event.target.id;
        // console.log("Console logging event", event);
        let bucketlistId = document.getElementsByClassName("hiddenId")[0].id;
        addBtn.innerHTML = "Added";
        addBtn.style.color = "Gray";
        addBtn.disabled = true;

        // function getBucketlist() {
        $.ajax({
        method: "PUT",
        url: `http://localhost:4000/api/v1/bucketlist/${bucketlistId}/donutstores/${donutStoreId}`,
        success: (success)=> {
            console.log(success);
        },
        error: (err) => {
        console.log(err);
        }
    });
});
});

// function renderBucketlist(donutStore) {
//     $("#left-column").append(`${donutCard(donutStore)}`)
//     };


// function donutCard(donutStore) {
// return `<div class = "card" style= "width: 18rem;">
// <img class = "card-img-top" src = "${donutStore.photo.photo_reference}" alt = "test">
// <div class = "card-body">
//     <h5 class = "card-title">${donutStore.name}</h5>
// </div>
// <ul class = "list-group list-group-flush">
//     <li class = "list-group-item">${donutStore.formatted_address}</li>
//     <li class = "list-group-item">${donutStore.rating}</li>
//     <li class = "list-group-item">${donutStore.weekday_text}</li>
// </ul>
// <div class = "card-body">
// <button type="button" class="add btn btn-success position-absolute mid-center" id=${donutStore._id}>DOUGHNIT</button>
// <button type="button" class="add btn btn-dark position-absolute mid-center" id=${donutStore._id}>DOUGHNIT</button>
// </div>
// </div>
//     `;
// }
// getBucketlist();
//     })
// });
