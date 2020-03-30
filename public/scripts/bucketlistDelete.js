console.log("Sanity check - bucketlist DELETE");

// for testing event listenser - didn't work
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     let closeBtn = document.getElementsByClassName("closeBtn");
//     debugger;
//     console.log(closeBtn);
//     closeBtn.forEach(button => {
//         console.log("iterating through html element", button);
//     })
//     closeBtn.addEventListener("click", function() {
//         console.log("successful event");
//     })
// }); 

let closeBtn = document.getElementsByClassName("closeBtn");

$(document).ready(function() {
    $("#left-column").on("click", function(event) {
        if (event.target.classList.contains("closeBtn")) {
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
    }
});

function onSuccess() {
    location.reload();
};

});
