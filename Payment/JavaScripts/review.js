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




// purchase summary functionality = exported


let purchaseItem = JSON.parse(localStorage.getItem("arr")) || []

//let totalAmountArr =  localStorage.setItem("totalAmount", JSON.stringify(arr3))

// test cases-
// let purchaseItem = [
//     {
//       image:"https://cdn-images.farfetch-contents.com/17/93/96/16/17939616_40034532_480.jpg",
//       img2:"https://cdn-images.farfetch-contents.com/17/93/96/16/17939616_40034505_1000.jpg",
//       brand:"ZIMMERMANN",
//       name:"Anneke mix-print midi dress",
//       type: "clothing",
//       price: 1820,
//       qty: 1,
//   },
//   {
//       image:"https://cdn-images.farfetch-contents.com/17/24/95/96/17249596_38000909_1000.jpg",
//       img2:"https://cdn-images.farfetch-contents.com/17/24/95/96/17249596_37999896_1000.jpg", 
//       brand:"Burberry",
//       name:"Matelasses single breasted jacket",
//       type: "clothing",
//       price: 1685,
//       qty: 1,
  
//   },
//   {
//       image:"https://cdn-images.farfetch-contents.com/17/70/19/36/17701936_39803374_480.jpg",
//       img2:"https://cdn-images.farfetch-contents.com/17/70/19/36/17701936_39858339_1000.jpg", 
//       brand:"Frankie shop",
//       name:"Astra bommber jacket",
//       type: "clothing",
//       price: 615,
//       qty: 1,
//   }
// ];

// summary-box
import {promo, purchaseDesplay} from "../common Components/userPay.js";

let appContainer = document.querySelector("#pSBox");

purchaseDesplay (purchaseItem, appContainer);

// review purchase container
purchaseItem.forEach(element => {

    let prodImgbox = document.createElement("div")
    let img = document.createElement("img");
    img.setAttribute("id", "prodImg");
    img.src=element.image;
    prodImgbox.append(img);

    let prodDescBox =  document.createElement("div");
    let prodItem = document.createElement("h3");
    prodItem.setAttribute("id", "revProdItem")
    prodItem.innerText=element.name;
    let prodType = document.createElement("p");
    prodType.setAttribute("id", "prodType")
    prodType.innerText=element.type;

    let s_q_last_box = document.createElement("div");
    let prodSizeD = document.createElement("p");
    prodSizeD.setAttribute("id", "prodSizeD")
    prodSizeD.innerText="Size: X-large-45-IT";
    let prodQuantity = document.createElement("p");
    prodQuantity.setAttribute("id", "prodQuantity");
    prodQuantity.innerText=`Quantity: ${element.qty}`;
    let lastLeftD = Math.floor(Math.random()*6+1);
    let lastRem = document.createElement("p");
    lastRem.setAttribute("id", "lastRem");
    lastRem.innerText=`Last ${lastLeftD} Left`;
    s_q_last_box.append(prodSizeD, prodQuantity, lastRem);

    prodDescBox.append(prodItem, prodType, s_q_last_box);

    let priceBox = document.createElement("div");
    let revPriceDs = document.createElement("h3");
    revPriceDs.setAttribute("id", "revPriceDs")
    revPriceDs.innerText="Price: $" +element.price;
    let dutiesApp = document.createElement("p");
    dutiesApp.setAttribute("id", "dutiesApp")
    dutiesApp.innerText="Import duties included";
    priceBox.append(revPriceDs, dutiesApp);

    let priceNum = (+element.price);
    let ranDate1 = Math.floor(Math.random()*31+1);
    let ranDate2 = Math.floor(Math.random()*31+1);

    let arrivDateBox = document.createElement("div");
    let arrivingDate = document.createElement("h3");
    arrivingDate.setAttribute("id", "arrivingDate")
    arrivingDate.innerText=`Arriving between June ${ranDate1} to July ${ranDate2}`;
    let revDelCharge = document.createElement("p");
    revDelCharge.setAttribute("id", "revDelCharge");

    let delCharge = 24.00;

    revDelCharge.innerText="Delivery Charge: "+"$"+delCharge;
    arrivDateBox.append(arrivingDate, revDelCharge);


    document.getElementById("finalDetails").append(prodImgbox,prodDescBox,priceBox,arrivDateBox);

    let totalCal = priceNum+delCharge;
    document.querySelector("#revTotalCharge").innerText="USD$ "+totalCal;
});



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

let start = 0;
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


//footer dynamic name addition

let footerName = JSON.parse(localStorage.getItem("userData"))

//test case
// let footerName ={
//     userNameSign: "Dhananjay Kandalkar"
// }

document.querySelector("#dynaUser").innerText=(footerName.name);




//process done!! go to homepage functionality

let saveCardDetails=()=>{
    alert("Your Payment successfully done!");

    window.location.href="/index.html";
}
document.querySelector(".place-order").addEventListener("click", saveCardDetails)



// switch to homepage from navbar farfetch logo

document.querySelector("#switched").onclick=()=>{
    window.location.href="/index.html"
}