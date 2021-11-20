// this is done to add the main image to th start page
  var w = window.innerWidth;
  var int = 852;
  //console.log(w);
  if(w < int){
    document.getElementById("main_img").src = "images/manny.jpg"; 
    document.getElementById("main-words-L").style.display = "none"; 
    document.getElementById("main-words-R").style.display = "none"; 
    document.getElementById("main-small").style.display = "block"; 
    document.getElementById("home-btn").style.fontSize = "12px"; 
    document.getElementById("home-btn").style.padding = "0px 0px"; 
    console.log(window.innerWidth);

  }
  else{
    document.getElementById("main_img").src = "images/manny_wide.jpg"; 
    document.getElementById("main-words-L").style.display = "block"; 
    document.getElementById("main-words-R").style.display = "block";
    document.getElementById("main-small").style.display = "none";  
    document.getElementById("main_img").style.maxWidth = "5000px"; 
  }