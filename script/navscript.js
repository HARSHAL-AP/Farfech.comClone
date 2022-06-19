import {navbar,fotter} from "/components/navbar.js";


document.getElementById("bot").innerHTML=fotter();
document.getElementById("navbar").innerHTML=navbar();


var modal=document.getElementById("myModal");

var btn = document.getElementById("searchbutn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

