console.log("Sanity check - bucketlist DELETE");

let closeBtn = document.getElementsByClassName("closeBtn");

$(document).ready(function() {
    $("#left-column").on("click", function(event) {
        if (event.target.classList.contains("closeBtn")) {
        let donutStoreId = event.target.id;
        let bucketlistId = document.getElementsByClassName("hiddenId")[0].id;

        $.ajax({    
        method: "DELETE",
        url: `https://doughnit.herokuapp.com/api/v1/bucketlist/${bucketlistId}/donutstores/${donutStoreId}`,
        success: onSuccess,
        error: (err) => {
            console.log(err);
        }
    })
    }
});

function onSuccess() {
    location.reload();
};

});
