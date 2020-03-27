// need to handle adding stores to bucketlist, removing stores from bucketlist, and dougnnit
console.log("Sanity check - bucketlistUpdate")

$(document).ready(function() {
    const addBtn = document.querySelector("add");
    console.log(addBtn);
    $(".add").on("click", function(event) {
        event.preventDefault();
        let donutStoreId = event.target.id;
        let bucketlistId = document.getElementsByClassName("hiddenId").id;
        console.log(bucketlistId);
        console.log(donutStoreId);
        addBtn.innerHTML = "Added";
        addBtn.style.color = "Gray";
        addBtn.disabled = true;

        function getBucketlist() {
        $.ajax({
        method: "PUT",
        url: `http://localhost:4000/api/v1/bucketlist/${bucketlistId}/donutstores/${donutStoreId}`,
        success: function(res) {
            renderBucketlist(res);
        },
        error: (err) => {
        console.log(err);
        }
    }


function renderBucketlist(bucketlist) {
    bucketlist.bucketlist.forEach(donutStore => {
    $("#bucketlist").append(`${donutCard(donutStore)}`)


function donutCard(donutStore) {
`<div class = "card" style= "width: 18rem;">
<img class = "card-img-top" src = "${DonutStore.photo.photo_reference}" alt = "test">
<div class = "card-body">
    <h5 class = "card-title">${DonutStore.name}</h5>
</div>
<ul class = "list-group list-group-flush">
    <li class = "list-group-item">${DonutStore.formatted_address}</li>
    <li class = "list-group-item">${DonutStore.rating}</li>
    <li class = "list-group-item">${DonutStore.weekday_text}</li>
</ul>
<div class = "card-body">
<button type="button" class="add btn btn-success position-absolute mid-center" id=${donutStore._id}>DOUGHNIT</button>
<button type="button" class="add btn btn-dark position-absolute mid-center" id=${donutStore._id}>DOUGHNIT</button>
</div>
</div>
`
}
getBucketlist();