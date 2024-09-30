// document.getElementById("hamburger").addEventListener("click", function () {
//   this.classList.toggle("active");
//   document.getElementById("menu").classList.toggle("active");
// });

// // Automatically hide the menu when a menu item is clicked
// var navLinks = document.querySelectorAll(".nav-list a");
// navLinks.forEach(function (link) {
//   link.addEventListener("click", function () {
//     var menu = document.getElementById("menu");
//     menu.classList.remove("active"); // Hide menu after clicking a link
//   });
// });

function myFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
