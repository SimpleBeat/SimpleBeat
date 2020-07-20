const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

// On page load 
window.onscroll = function() { checkOffset() };

function checkOffset() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

