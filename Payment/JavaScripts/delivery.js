import {pNavbar, pFooter} from "../common Components/pNavbarFooter.js"

document.querySelector("#pNavbar").innerHTML=pNavbar();

document.querySelector("#pFooter").innerHTML=pFooter();


// need help dropDown functionality-

import {helpDropDownTags , helpDropDownFunc, footNeedHelpDropDwnFunc} from "../common Components/dropDowns.js";

document.querySelector("#needHelpDropDwn").innerHTML=helpDropDownTags();

document.querySelector("#footNeedHelpDropDwn").innerHTML=helpDropDownTags();

let show = helpDropDownFunc();

let show2 = footNeedHelpDropDwnFunc();


//user address All functionality

let addLine= document.getElementById("add-line");

addLine.onclick=()=>{

    addLine.innerHTML=null;

    let addLine3 = document.createElement("input");
    addLine3.setAttribute("type", "text");
    addLine3.setAttribute("id", "addL3");

    document.getElementById("add-line").append(addLine3);
}


// reuired fileds functions

let firstName = document.querySelector("#pName");
let lastName = document.querySelector("#lastName");
let countryChoose  = document.querySelector("#pCountry");
let addL1 = document.querySelector("#addL1");
let cityChoose = document.querySelector("#pCity");
let stateChoose = document.querySelector("#pState");
let zipCode = document.querySelector("#pZip");
let phoneNum = document.querySelector("#pPhone");

firstName.onkeypress=(ele)=>{
    if (ele.key=="Enter" && firstName.value!==""){
        document.querySelector("#signal1").innerHTML="";

        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-circle-check");
        document.querySelector("#signal1").append(i);
    }
    else {
        document.querySelector("#signal1").innerText="*Required";
    }
}
lastName.onkeypress=(ele)=>{
    if (ele.key=="Enter" && lastName.value!==""){
        document.querySelector("#signal2").innerHTML="";

        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-circle-check");
        document.querySelector("#signal2").append(i);
    }
    else {
        document.querySelector("#signal2").innerText="*Required";
    }
}
countryChoose.onkeypress=(ele)=>{
    if (ele.key=="Enter" && countryChoose.value!==""){
        document.querySelector("#signal3").innerHTML="";

        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-circle-check");
        document.querySelector("#signal3").append(i);
    }
    else {
        document.querySelector("#signal3").innerText="*Required";
    }
}
addL1.onkeypress=(ele)=>{
    if (ele.key=="Enter" && addL1.value!==""){
        document.querySelector("#signal4").innerHTML="";

        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-circle-check");
        document.querySelector("#signal4").append(i);
    }
    else {
        document.querySelector("#signal4").innerText="*Required";
    }
}
cityChoose.onkeypress=(ele)=>{
    if (ele.key=="Enter" && cityChoose.value!==""){
        document.querySelector("#signal5").innerHTML="";

        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-circle-check");
        document.querySelector("#signal5").append(i);
    }
    else {
        document.querySelector("#signal5").innerText="*Required";
    }
}
stateChoose.onkeypress=(ele)=>{
    if (ele.key=="Enter" && stateChoose.value!==""){
        document.querySelector("#signal6").innerHTML="";

        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-circle-check");
        document.querySelector("#signal6").append(i);
    }
    else {
        document.querySelector("#signal6").innerText="*Required";
    }
}
zipCode.onkeypress=(ele)=>{
    if (ele.key=="Enter" && zipCode.value!==""){
        document.querySelector("#signal7").innerHTML="";

        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-circle-check");
        document.querySelector("#signal7").append(i);
    }
    else {
        document.querySelector("#signal7").innerText="*Required";
    }
}
phoneNum.onkeypress=(ele)=>{
    if (ele.key=="Enter" && phoneNum.value!==""){
        document.querySelector("#signal8").innerHTML="";

        let i = document.createElement("i");
        i.setAttribute("class", "fa-solid fa-circle-check");
        document.querySelector("#signal8").append(i);
    }
    else {
        document.querySelector("#signal8").innerText="*Required";
    }
}


// all field must fill and then witch to next process function
// and also includes all address data collection

function addressCollection(){
    let firstName = document.querySelector("#pName").value;
    let lastName = document.querySelector("#lastName").value;
    let countryChoose  = document.querySelector("#pCountry").value;
    let addL1 = document.querySelector("#addL1").value;
    let cityChoose = document.querySelector("#pCity").value;
    let stateChoose = document.querySelector("#pState").value;
    let zipCode = document.querySelector("#pZip").value;
    let phoneNum = document.querySelector("#pPhone").value;

    let flag=false;

    if (firstName=="" && lastName=="" && countryChoose=="" && addL1=="" && cityChoose=="" && stateChoose=="" && zipCode=="" && phoneNum=="" ){
        alert("Please fill address details");
    }
    else if (firstName==""){
        let p = document.createElement("p");
        p.innerText="*please fill First Name";
        document.querySelector("#signal1").append(p);
    }
    else if (lastName=="") {
        let p = document.createElement("p");
        p.innerText="*please fill Last Name";
        document.querySelector("#signal2").append(p);
    }
    else if (countryChoose=="") {
        let p = document.createElement("p");
        p.innerText="*please Choose Country";
        document.querySelector("#signal3").append(p);
    }
    else if (addL1=="") {
        let p = document.createElement("p");
        p.innerText="*please Add your address";
        document.querySelector("#signal4").append(p);
    }
    else if (cityChoose=="") {
        let p = document.createElement("p");
        p.innerText="*please put your city";
        document.querySelector("#signal5").append(p);
    }
    else if (stateChoose=="") {
        let p = document.createElement("p");
        p.innerText="*please put your state";
        document.querySelector("#signal6").append(p);
    }
    else if (zipCode=="") {
        let p = document.createElement("p");
        p.innerText="*please provide zip code";
        document.querySelector("#signal7").append(p);
    }
    else if (phoneNum=="") {
        let p = document.createElement("p");
        p.innerText="*please give phone number";
        document.querySelector("#signal8").append(p);
    }
    else {
        let h3 = document.createElement("h3");
        h3.innerText="*All Done! Thank you :)";
        document.querySelector("#allDone").append(h3);
        flag=true;

        updateProgressBar();
    }
    

    let obj = {
        uFirstName: pform.pName.value,
        uLastName: pform.lastName.value,
        uCountry: pform.pCountry.value,
        uAddress: {
            add1: pform.addL1.value,
            add2: pform.addL2.value,
            // add3: pform.addL3.value
        },
        uCity: pform.pCity.value,
        uState: pform.pState.value,
        uZipCode: pform.pZip.value,
        uPhone: pform.pPhone.value
    }


    if (document.getElementById("chkInput").checked){
        checkBillingAdd(obj);
    }

    console.log(obj);

    localStorage.setItem("userAddress", JSON.stringify(obj));

   

    if (flag==true){
        window.location.href="payment.html";
    }
   
}

document.querySelector("#save-btn").addEventListener("click", addressCollection)



//progress bar functionality

const saveBtn = document.querySelector("#save-btn");
const progress = document.getElementById("progress");
const progressSteps = document.querySelectorAll(".progress-step");

let stepNum=0;
saveBtn.addEventListener("click", ()=>{
    stepNum++;
})
let updateProgressBar = ()=>{
    progressSteps.forEach((element, index) => {
        if (index<stepNum+1){
            element.classList.add("progress-step-active");
        }else {
            element.classList.remove("progress-step-active");
        }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width = ((progressActive.length - 1) / (progressSteps.length-1))* 100 +"%";
};


// billing addres validation functionality
let checkBillingAdd=(data)=>{
    localStorage.setItem("billingAddress", JSON.stringify(data));
}



// purchase data summary functionality

// this data will come from cart
// let purchaseItem = JSON.parse(localStorage.getItem(""));

// testing data (need to change after geting original);

let purchaseItem = [{
    name: "shoes",
    Image: "https://cdn-images.farfetch-contents.com/18/54/14/99/18541499_39987356_170.jpg",
    price: "525"
}]

import {promo, purchaseDesplay} from "../common Components/userPay.js";

let appContainer = document.querySelector("#pSBox");

purchaseDesplay (purchaseItem, appContainer);




// footer dynamic name addition

// let footerName = JSON.parse(localStorage.getItem(""));

//Data test (need to take original from team member)

let footerName ={
    userNameSign: "Dhananjay Kandalkar"
}

document.querySelector("#dynaUser").innerText=(footerName.userNameSign);



// country choose dropdown functionality

document.addEventListener("DOMContentLoaded", ()=>{

    const selectDrop = document.querySelector("#pCountry");

    fetch(`https://restcountries.com/v2/all`).then(res=>{
        return res.json();
    }).then(contData=>{

        appendCountries(selectDrop,contData)

    }).catch(err=>{
        console.log("err: ", err);
    })

})
let appendCountries=(selectDrop,contData)=>{
    let showCountries ="";
    contData.forEach(element => {
        // console.log(element.name)
        showCountries+= `<option value="${element.name}">${element.name}</option>`;

    });
    selectDrop.innerHTML=showCountries;
}

