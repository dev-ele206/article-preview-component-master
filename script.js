// function shareBtn() {
//     var x = document.getElementsByClassName("profile-section");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

$('#shareBtn').on('click', function() {
    $('#profile-section').toggle();
})