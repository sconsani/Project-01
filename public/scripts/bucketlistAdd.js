// need to handle adding stores to bucketlist, removing stores from bucketlist, and dougnnit
console.log("Sanity check - bucketlist ADD")

$(document).ready(function() {

    $(".card-deck").on("click", function(event) {
        let addBtn = event.target;
        // console.log("Console logging addBtn", addBtn);
        let donutStoreId = event.target.id;
        // console.log("Console logging event", event);
        let bucketlistId = document.getElementsByClassName("hiddenId")[0].id;
        addBtn.innerHTML = "Added";
        addBtn.style.backgroundColor = "Gray";
        addBtn.style.color = "black"
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
