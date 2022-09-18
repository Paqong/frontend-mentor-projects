/* Mobile Hamburger Menu */
const burgerIcon = document.querySelector(".hamburger-icon");
const topNav = document.querySelector(".topnav");

let currentStatus = "closed";

burgerIcon.addEventListener("click", function(){
    if (currentStatus == "closed"){
        topNav.style.height = "fit-content";
        currentStatus = "opened";
    }else {
        topNav.style.height = "0";
        currentStatus = "closed";
    }
})