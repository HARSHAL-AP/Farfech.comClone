import {pNavbar, pFooter} from "../common Components/pNavbarFooter.js"

document.querySelector("#pNavbar").innerHTML=pNavbar();


document.querySelector("#pFooter").innerHTML=pFooter();


// ******

// need help dropDown functionality

import {helpDropDownTags , helpDropDownFunc, footNeedHelpDropDwnFunc} from "../common Components/dropDowns.js";

document.querySelector("#needHelpDropDwn").innerHTML=helpDropDownTags();

document.querySelector("#footNeedHelpDropDwn").innerHTML=helpDropDownTags();

let show = helpDropDownFunc();

let show2 = footNeedHelpDropDwnFunc();



// purchase summaury functionality = exported
// let purchaseItem = JSON.parse(localStorage.getItem(""));

// test case data
let purchaseItem = [{
    name: "Alexander McQueen",
    Image: "https://cdn-images.farfetch-contents.com/18/54/14/99/18541499_39987356_170.jpg",
    price: "525"
}]

import {promo, purchaseDesplay} from "../common Components/userPay.js";

let appContainer = document.querySelector("#pSBox");

purchaseDesplay (purchaseItem, appContainer);

// ***************


// let purchaseItem = JSON.parse(localStorage.getItem(""));

//test case data
let purchaseItemReview = [{
    name: "Alexander McQueen",
    Image: "https://cdn-images.farfetch-contents.com/18/54/14/99/18541499_39987356_170.jpg",
    price: "525",
    type: "draped denim skirt",
    size: "x-large 42 IT ",
    quantity: 1,
}]


purchaseItemReview.forEach(element => {
    document.querySelector("#prodImg").src=element.Image;

    document.querySelector("#revProdItem").innerText=element.name;

    document.querySelector("#prodType").innerText=element.type;

    document.querySelector("#prodSizeD").innerText=element.size;

    document.querySelector("#prodQuantity").innerText=element.quantity;

    let lastLeftD = Math.floor(Math.random()*6+1);

    document.querySelector("#lastRem").innerText=`Last ${lastLeftD} Left`;

    document.querySelector("#revPriceDs").innerText="Price: $" +element.price;
    let priceNum = (+element.price);

    let ranDate1 = Math.floor(Math.random()*31+1);

    let ranDate2 = Math.floor(Math.random()*31+1);

    document.querySelector("#arrivingDate").innerText=`Arriving between June ${ranDate1} to July ${ranDate2}`;

    let delCharge = 24.00;
    document.querySelector("#revDelCharge").innerText="$"+delCharge;

    document.querySelector("#dutiesApp").innerText="Import duties included";

    let totalCal = priceNum+delCharge;
    document.querySelector("#revTotalCharge").innerText="USD$"+totalCal;
    
});



//footer dynamic name addition

// let footerName = JSON.parse(localStorage.getItem(""));

//Data test

let footerName ={
    userNameSign: "Dhananjay Kandalkar"
}

document.querySelector("#dynaUser").innerText=(footerName.userNameSign);













// billing address, card details appending functionality

let cardDetailsData = JSON.parse(localStorage.getItem("CardDetails"));

console.log(cardDetailsData);

document.getElementById("hNameApp").innerText=cardDetailsData.cardHolder;

let last4=cardDetailsData.cardDigiits;
let laststore="";
for (let i = 15; i<last4.length; i++){
    laststore=laststore+last4[i];
}
console.log(laststore);

document.getElementById("cardNumApp").innerText=`**** **** ****  ${laststore}`;

document.getElementById("expDateApp").innerText=cardDetailsData.cardDate;




let billingAddData = JSON.parse(localStorage.getItem("billingAddress"));

console.log(billingAddData);

let start =0;
while(start<2){
    let h4a = document.createElement("h4");
    h4a.innerText = billingAddData.uFirstName+" "+billingAddData.uLastName

    let p1 = document.createElement("p");
    p1.innerText = billingAddData.uAddress.add1;

    let p2 = document.createElement("p");
    p2.innerText = billingAddData.uAddress.add2;

    let p3 = document.createElement("p");
    p3.innerText = billingAddData.uAddress.add3;

    if (start==0){
       
        document.querySelector("#revholdApp").append(h4a);

        if (billingAddData.uAddress.add2=="" && billingAddData.uAddress.add3==""){
            document.querySelector("#revAddApp").append(p1);
        }
        else if (billingAddData.uAddress.add2!==""){
            document.querySelector("#revAddApp").append(p1, p2);
        }
        else {
            document.querySelector("#revAddApp").append(p1);
        }
    }
    else if (start==1){
        document.querySelector("#uDelNameApp").append(h4a);

        if (billingAddData.uAddress.add2=="" && billingAddData.uAddress.add3==""){
            document.querySelector("#uDelAddApp").append(p1);
        }
        else if (billingAddData.uAddress.add2!==""){
            document.querySelector("#uDelAddApp").append(p1, p2);
        }
        else {
            document.querySelector("#uDelAddApp").append(p1);
        }
    }
    start++;
};







// rewiew functionality

let saveCardDetails=()=>{
    window.location.href="index.html";
    // homepage
}

document.querySelector(".place-order").addEventListener("click", saveCardDetails)
