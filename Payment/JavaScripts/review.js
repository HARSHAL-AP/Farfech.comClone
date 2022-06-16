import {pNavbar, pFooter} from "../common Components/pNavbarFooter.js"

document.querySelector("#pNavbar").innerHTML=pNavbar();


document.querySelector("#pFooter").innerHTML=pFooter();



// let purchaseItem = JSON.parse(localStorage.getItem(""));


// testing data  (need to change after getting original)
let purchaseItem = [{
    name: "shoes",
    Image: "https://cdn-images.farfetch-contents.com/18/54/14/99/18541499_39987356_170.jpg",
    price: "525"
}]

import {promo, purchaseDesplay} from "../common Components/userPay.js";

let appContainer = document.querySelector("#pSBox");

purchaseDesplay (purchaseItem, appContainer);



// ***************

// rewiew functionality

let saveCardDetails=()=>{
    window.location.href="index.html";
    // homepage
}

document.querySelector(".place-order").addEventListener("click", saveCardDetails)
