// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 1000) {
    document.getElementById("home-btn").style.opacity = "0";
    setTimeout(function(){ document.getElementById("home-btn").disabled = "none"; }, 3000);
    document.getElementById("navbar").style.backgroundColor = "transparent";
  } else {
    document.getElementById("home-btn").style.opacity = "1";
    setTimeout(function(){ document.getElementById("home-btn").disabled = "block"; }, 3000);
    document.getElementById("navbar").style.backgroundColor = "rgba(245, 245, 245, 0.041";
  }
}

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 500px)").matches) {
    console.log("Screen width is at least 500px")
    document.getElementById("main_img").src = "images/manny_wide.jpg"; 
  } else {
    console.log("Screen less than 500px")
    document.getElementById("main_img").src = "images/manny2.jpg"; 
  }
})

