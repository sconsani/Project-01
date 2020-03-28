console.log("Sanity check!")
// window variable to get Bucketlist.userName from URL
// get DonutStore.Id from remove button

$document.ready(function() {
    let deleteBtn = document.getElementById("delete-btn");
    $("#delete-btn").on("click", function(event){
        event.preventDefault();
        $("#delete-btn").remove();
        $.ajax({
        method: "DELETE",
        url: "http://localhost:4000/api/v1/bucketlist/:bucketlistId/donutstores/:donutstoreId",
        success: onSuccess,
        error: console.log("Something went wrong", err)
        })
    })
})

// change 
function onSuccess(bucketlist) {
    $("#bucketlist").remove();
};