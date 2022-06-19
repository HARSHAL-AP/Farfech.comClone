import {pNavbar, pFooter} from "../common Components/pNavbarFooter.js"

document.querySelector("#pNavbar").innerHTML=pNavbar();

document.querySelector("#pFooter").innerHTML=pFooter()


// *****

// need help dropDown functionality

import {helpDropDownTags , helpDropDownFunc, footNeedHelpDropDwnFunc} from "../common Components/dropDowns.js";

document.querySelector("#needHelpDropDwn").innerHTML=helpDropDownTags();

document.querySelector("#footNeedHelpDropDwn").innerHTML=helpDropDownTags();

let show = helpDropDownFunc();

let show2 = footNeedHelpDropDwnFunc();



let purchaseItem = JSON.parse(localStorage.getItem("arr")) || [];

//let totalAmountArr =  localStorage.setItem("totalAmount", JSON.stringify(arr3))


// test cases:-

// let purchaseItem = [
//       {
//         image:"https://cdn-images.farfetch-contents.com/17/93/96/16/17939616_40034532_480.jpg",
//         img2:"https://cdn-images.farfetch-contents.com/17/93/96/16/17939616_40034505_1000.jpg",
//         brand:"ZIMMERMANN",
//         name:"Anneke mix-print midi dress",
//         type: "clothing",
//         price: 1820,
//         qty: 1,
//     },
//     {
//         image:"https://cdn-images.farfetch-contents.com/17/24/95/96/17249596_38000909_1000.jpg",
//         img2:"https://cdn-images.farfetch-contents.com/17/24/95/96/17249596_37999896_1000.jpg", 
//         brand:"Burberry",
//         name:"Matelasses single breasted jacket",
//         type: "clothing",
//         price: 1685,
//         qty: 1,
    
//     },
//     {
//         image:"https://cdn-images.farfetch-contents.com/17/70/19/36/17701936_39803374_480.jpg",
//         img2:"https://cdn-images.farfetch-contents.com/17/70/19/36/17701936_39858339_1000.jpg", 
//         brand:"Frankie shop",
//         name:"Astra bommber jacket",
//         type: "clothing",
//         price: 615,
//         qty: 1,
//     }
// ];


import {promo, purchaseDesplay} from "../common Components/userPay.js";

let appContainer = document.querySelector("#pSBox");

purchaseDesplay (purchaseItem, appContainer);




// credit/debit card input group dropdown functionality

let debitBoxInvoked=()=>{
    document.getElementById("card-container").classList.toggle("show-card");
}

document.querySelector("#debit-pay-wrapper").addEventListener("click", debitBoxInvoked)


window.onclick = (event)=> {
    if (!event.target.matches('#debit-pay-wrapper')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        console.log(openDropdown);
        if (openDropdown.classList.contains('show-card')) {
            openDropdown.classList.contains('show-card')
        }
        else {
            openDropdown.classList.remove('show-card');
        }
      }
    }
}

//credit/debit card auto suggestion functionality

document.addEventListener('DOMContentLoaded', () => {
    const cleaveCC = new Cleave(".card_digits", {
        creditCard:true,
        delimeter: "-",
        onCreditCardTypeChanged: function(type){
            const cardBrand = document.getElementById("cardBrand"),
                visa = "fab fa-cc-visa",
                mastercard = "fab fa-cc-mastercard",
                amex="fab fa-cc-amex",
                diners = "fab fa-cc-diners-club",
                jcb = "fab fa-cc-jcb",
                discover = "fab fa-cc-discover";

            switch(type){
                case "visa":
                    cardBrand.setAttribute("class", visa);
                    break;
                case "mastercard":
                    cardBrand.setAttribute("class", mastercard);
                    break;
                case "amex":
                    cardBrand.setAttribute("class", amex);
                    break;
                case "diners":
                    cardBrand.setAttribute("class", diners);
                    break;
                case "jcb":
                    cardBrand.setAttribute("class", jcb);
                    break;
                case "discover":
                    cardBrand.setAttribute("class", discover);
                    break;
                default:
                    cardBrand.setAttribute("class", "");
                    break;
            }
        },
    });

    const cleaveDate = new Cleave(".card_date", {
        date: true,
        datePattern: ["m", "y"],
    });
      
    const cleaveCCV = new Cleave(".cardCcv", {
        blocks: [3],
    });
});


// algorithm for validating creditCad digits
function validateCarddigits (digits){
    let digStore = "";
    for (let i = 0; i<digits.length; i++){
        if (digits[i]===" "){
            continue;
        }
        else {
            digStore=digStore+digits[i];
        }
    }
    let digNum = +digStore;
    let sum =0;

    while(digNum>0){
        let a = digNum%10;
        digNum = Math.floor(digNum/10);

        let b = (digNum%10)*2;
        digNum = Math.floor(digNum/10);

        if (b>9){
            b-=9;
        }

        sum+=a+b;
    }
    return sum%10==0;
}


// algorithm for validating card date
function validatingDates(dateS){
    // some testcases stored for compare
    let dateArr=new Array ("11/22","01/23","02/23","03/23","04/23","05/23","01/24","02/24","03/24","04/24","05/24","04/26");
    let i=0;
    let flag=false;
    while (i<dateArr.length){
        if (dateArr[i]==dateS){
            flag =true;
        }
        i++;
    }
    if(flag){
        return true;
    }
    return false;
};



// Algorithm for validating cvv
function validatingCVV(cvvS){
    let numArr=new Array ("123","988","456","789","234","567","890","345","678","456","789");
    let i=0;
    let flag=false;
    while (i<numArr.length){
        if (numArr[i]==cvvS){
            flag =true;
        }
        i++;
    }
    if(flag){
        return true;
    }
    return false;
};




//card overall functionality

//** reuired fileds functions

let cardHolder= document.querySelector(".card_name");
let cardDigits = document.querySelector(".card_digits");
let cardExpDate  = document.querySelector(".card_date");
let cardCcv = document.querySelector(".cardCcv");
let saveCard = document.querySelector(".cardSave");

cardHolder.onkeypress=(ele)=>{
    if (ele.key=="Enter" && cardHolder.value!==""){
        document.querySelector("#pSign1").innerHTML="";

        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-circle-check");
        document.querySelector("#pSign1").append(i);
    }
    else {
        document.querySelector("#pSign1").innerText="*Required";
    }
}
cardDigits.onkeypress=(ele)=>{
    let cardOutput;
    if (ele.key=="Enter"){
        cardOutput = validateCarddigits (cardDigits.value);
    }
    if (ele.key=="Enter" && cardDigits.value!=="" && cardDigits.value.length>=16 &&  cardOutput===true){
        document.querySelector("#pSign2").innerHTML="";
        let span =  document.createElement("span");
        span.style.color="green";
        span.innerText="Valid";
        
        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-circle-check");
        document.querySelector("#pSign2").append(span,i);
    }
    else if (cardOutput===false){
        document.querySelector("#pSign2").innerText="*Not valid Card Numbers!";
    }
    else{
        document.querySelector("#pSign2").innerText="*Required! please put 16 digits";
    }
}
cardExpDate.onkeypress=(ele)=>{
    let expDateCheck;
    if (ele.key=="Enter"){
        expDateCheck = validatingDates(cardExpDate.value);
    }
    if (ele.key=="Enter" && cardExpDate.value!=="" && expDateCheck===true){
        document.querySelector("#pSign3").innerHTML="";

        let span =  document.createElement("span");
        span.style.color="green";
        span.innerText="Valid";

        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-circle-check");
        document.querySelector("#pSign3").append(i);
    }
    else if (expDateCheck===false){
        document.querySelector("#pSign3").innerText="*Invalid Date!";
    }
    else {
        document.querySelector("#pSign3").innerText="*Required";
    }
}
cardCcv.onkeypress=(ele)=>{
    let checkCVV;
    if (ele.key=="Enter"){
        checkCVV= validatingCVV(cardCcv.value);
        console.log(checkCVV);
    }
    if (ele.key=="Enter" && cardCcv.value!=="" && checkCVV===true){
        document.querySelector("#pSign4").innerHTML="";

        let span =  document.createElement("span");
        span.style.color="green";
        span.innerText="Valid";

        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-circle-check");
        document.querySelector("#pSign4").append(span, i);
    }
    else if (checkCVV===false){
        document.querySelector("#pSign4").innerText="*Not valid CVV!";
    }
    else {
        document.querySelector("#pSign4").innerText="*Required";
    }
}

let yesGo =false;
saveCard.onclick=()=>{
    if (saveCard.checked){
        // document.querySelector("#pSign5").innerHTML="";
        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-circle-check");
        document.querySelector("#pSign5").append(i);

        if (cardHolder.value!=="" && cardDigits.value!=="" && cardExpDate.value!=="" && cardCcv.value!=="" && saveCard.checked){
            let h3 = document.createElement("h3");
            h3.innerText="*All Done! You May Proceed :)";
        
            document.querySelector("#allDetailsDone").append(h3);

            yesGo=true;
        }
    }
    else if (!saveCard.checked) {
        document.querySelector("#pSign5").innerText="*Required";
    }
}


// all card field must fill and then witch to next process function
// and also includes all card details collection

function cardDetailsCollection(){
    let cardHolder= document.querySelector(".card_name").value;
    let cardDigits = document.querySelector(".card_digits").value;
    let cardExpDate  = document.querySelector(".card_date").value;
    let cardCcv = document.querySelector(".cardCcv").value;
    let saveCard = document.querySelector(".cardSave").value;


    let flag=false;

    if (cardHolder=="" && cardDigits=="" && cardExpDate=="" && cardCcv=="" && !saveCard.checked){
        alert("Please fill All Card details");
    }
    if (cardHolder==""){
        let p = document.createElement("p");
        p.innerText="*please fill Card Holder Name";
        document.querySelector("#pSign1").append(p);
    }
    else if (cardDigits=="") {
        let p = document.createElement("p");
        p.innerText="*please fill 16 digits of your card ";
        document.querySelector("#pSign2").append(p);
    }
    else if (cardExpDate=="") {
        let p = document.createElement("p");
        p.innerText="*please Choose Card Expiry Date";
        document.querySelector("#pSign3").append(p);
    }
    else if (cardCcv=="") {
        let p = document.createElement("p");
        p.innerText="*please Add 3 digit ccv code";
        document.querySelector("#pSign4").append(p);
    }
    else if (!saveCard.checked){
        let p = document.createElement("p");
        p.innerText="*please save card details";
        document.querySelector("#pSign5").append(p);
    }

    if (cardHolder!=="" && cardDigits!=="" && cardExpDate!=="" && cardCcv!==""){
        flag=true;
        let cardObj = {
            cardHolder: pform.pCountry.value,
            cardDigiits: pform.pCity.value,
            cardDate: pform.pState.value,
            cardCcvCode: pform.pZip.value,
        }
        console.log(cardObj);

        localStorage.setItem("CardDetails", JSON.stringify(cardObj));
    }
    
    if (flag===true &&  yesGo===true){
        updateProgressBar();

        window.location.href="review.html";
    }
}

document.querySelector("#save-btn").addEventListener("click", cardDetailsCollection)



//progress bar functionality

const saveBtn = document.querySelector("#save-btn");
const progress = document.getElementById("progress");
const progressSteps = document.querySelectorAll(".progress-step");

let stepNum=0;
saveBtn.addEventListener("click", ()=>{
    stepNum++;

    updateProgressBar();
}) 
let updateProgressBar = ()=>{
    progressSteps.forEach((element, index) => {
        if (index<stepNum+1){
            element.classList.add("progress-step-active");
        }
        else {
            element.classList.remove("progress-step-active");
        }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width = ((progressActive.length - 1) / (progressSteps.length-1))* 100 +"%";
};



// billing Address data appending to payment dropdown address section


let billingAddData = JSON.parse(localStorage.getItem("billingAddress"));

console.log(billingAddData)

let h4a = document.createElement("h4");
h4a.innerText = billingAddData.uFirstName+" "+billingAddData.uLastName

document.querySelector("#uNameApp").append(h4a);


let p1 = document.createElement("p");
p1.innerText = billingAddData.uAddress.add1;

let p2 = document.createElement("p");
p2.innerText = billingAddData.uAddress.add2;

let p3 = document.createElement("p");
p3.innerText = billingAddData.uAddress.add3;

if (billingAddData.uAddress.add1!==""){
    document.querySelector("#uAddApp").append(p1);
}
else if (billingAddData.uAddress.add2!==""){
    document.querySelector("#uAddApp").append(p1, p2);
}
else if (billingAddData.uAddress.add3!==""){
    document.querySelector("#uAddApp").append(p1, p2, p3);
}
else {
    document.querySelector("#uAddApp").append(p1);
}

let h4b = document.createElement("h4");
h4b.innerText = billingAddData.uCountry;

document.querySelector("#uContApp").append(h4b);




// footer dynamic name addition

// let footerName = JSON.parse(localStorage.getItem("userData"))

//test case
let footerName ={
    userNameSign: "Dhananjay Kandalkar"
}

document.querySelector("#dynaUser").innerText=(footerName.userNameSign);


// switch to homepage from navbar farfetch logo

document.querySelector("#switched").onclick=()=>{
    window.location.href="/index.html"
}
