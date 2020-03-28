console.log("Sanity check bucketlist delete")

$(document).ready(function() {
    $("#left-column").on("click", function(event){
        let donutStoreId = event.target.id;
        console.log(event.target);
        let bucketlistId = document.getElementsByClassName("hiddenId")[0].id;
        $.ajax({
        method: "DELETE",
        url: `http://localhost:4000/api/v1/bucketlist/${bucketlistId}/donutstores/${donutStoreId}`,
        success: onSuccess,
        error: (err) => {
            console.log(err);
        }
        })
    })
})

// refresh the page 
function onSuccess(delDonutStore) {
    location.reload();
};