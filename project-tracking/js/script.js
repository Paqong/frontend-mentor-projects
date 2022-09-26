const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#nav-links");

let currentStatus = "closed";

hamburger.addEventListener("click", () => {
    if (currentStatus == "closed"){
        navLinks.style.height = "fit-content";
        currentStatus = "opened";
    }else {
        navLinks.style.height = "0";
        currentStatus = "closed";
    }
})

//Current Problem: 
/*
    When the nav-links is closed in mobile,
    the nav-links will also be hidden in desktop layout
*/ 