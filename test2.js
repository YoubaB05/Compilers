document.addEventListener("DOMContentLoaded", ()=>{
// Get the button

    const backToTopBtn = document.getElementById("backToTopBtn");
    const menu=document.querySelector(".menu");
    const dropdown = document.getElementById("dropdown-menu")

    // Show the button when the user scrolls down 200px
    window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
    };

    // Scroll back to the top when the button is clicked
    backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,          // Scroll to top of the page
        behavior: "smooth" // Smooth scroll effect
    });
    });
    menu.addEventListener("click",()=>{
    if (dropdown.style.display==="none") {
        dropdown.style.display ="block"

    }
    else {dropdown.style.display="none"}


    }
    )
    



})
