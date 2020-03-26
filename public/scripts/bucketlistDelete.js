console.log("Sanity check!")

$document.ready(function() {
    let deleteBtn = document.getElementById("delete-btn");
    $("#delete-btn").on("click", function(event){
        event.preventDefault();
        $("#delete-btn").remove();
        $.ajax({
        method: "DELETE",
        url: "http://localhost:4000/api/v1/bucketlist/:bucketlistId",
        success: onSuccess,
        error: console.log("Something went wrong", err)
        })
    })
})

// delete bucketlist and doughnit columns?
// add anything? link to the homepage? redirect to the homepage?
function onSuccess(bucketlist) {
    $("#bucketlist").remove();
    $("#doughnit").remove();
};