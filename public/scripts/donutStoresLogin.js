console.log("Sanity check- donutStoresLogin")

$(document).ready(function() {
    $(".sign-in").on("click", function(event){
        event.preventDefault();

        let userName = document.getElementById("username").value;
    $(".nav-item").append(`<a class="nav-link" href="/bucketlist/${userName}">My Bucketlist</a>`);
       
        $.ajax({
        method: "GET",
        url: `http://localhost:4000/api/v1/bucketlist/${userName}`,
        success: onSuccess,
        error: (err) => {
            console.log(err);
        },
        })
    })
});

function onSuccess(bucketlist) { 
    $("header").append(`<p hidden class="hiddenId" id=${bucketlist._id}></p>`);
    $("form").remove();
    
};