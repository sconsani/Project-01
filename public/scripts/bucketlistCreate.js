console.log("Sanity check!")

$document.ready(function() {
    // event listener for "Add to Bucketlist" click
    let addBtn = document.getElementById("add-btn")
    $("#add-btn").one("click", function(event){
        event.preventDefault();
    // change button label to "Added" and change color (can we disable the button - button.disabled = true?)
    // how do we get the DonutStore object when user clicks? change create controller? add DonutStore._id to donutStoreIndex.js template somewhere?
    // how can remove the event listener after the first click to "Add to bucketlist" onfirstclick? removeEventlistener?
    // can we re-enable the event listed if user removes DonutStore from bucketlist?
        addBtn.innerHTML = "Added";
        addBtn.style.color = "Gray";
        addBtn.disabled = true;
        $.ajax({
        method: "POST",
        url: "http://localhost:4000/api/v1/bucketlist",
        success: onSucces,
        error: console.log("Something went wrong", err),
        })
    })
})

function onSuccess(bucketlist) {
// append template to card deck id="bucketlist"
// bucketlist column template
// need to add a button to delete bucketlist
// "doughnit" and "remove" buttons
return `<div class = "card" style= "width: 18rem;">
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
    <a href="#" class="btn btn-primary bg-danger">DOUGHNIT</a>
    <a href="#" class="btn btn-primary bg-danger">Remove</a>
</div>
</div>
`
};
