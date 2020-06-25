// testing readability from JS file
console.log("Welcome to Collective Academy");


// adding a sticky navbar
$('div#page').scroll(function () {
    didScroll = true;
    myFunction();
});

window.onscroll = function () {

};

var navbar = document.getElementById("nav");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// on click show alert

function display_alert() {
    alert("¡Gracias! Hemos recibido tus datos.");
    document.getElementById("col1").reset();
    document.getElementById("col2").reset();
}