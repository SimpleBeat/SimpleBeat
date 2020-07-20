const header = document.getElementById("myHeader");
const sticky = header.offsetTop;




// Helper functions
function checkOffset() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


// On page load 
window.onscroll = function() { checkOffset() };