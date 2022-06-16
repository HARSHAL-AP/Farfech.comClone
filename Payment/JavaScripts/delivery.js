import {pNavbar, pFooter} from "../common Components/pNavbarFooter.js"

document.querySelector("#pNavbar").innerHTML=pNavbar();

document.querySelector("#pFooter").innerHTML=pFooter();



// address functionality

let addLine= document.getElementById("add-line");

addLine.onclick=()=>{

    addLine.innerHTML=null;

    let addLine3 = document.createElement("input");
    addLine3.setAttribute("type", "text");
    addLine3.setAttribute("id", "addL3");

    document.getElementById("add-line").append(addLine3);
}

function addressCollection(){
    let firstName = document.querySelector("#pName").value;
    let lastName = document.querySelector("#lastName").value;
    let countryChoose  = document.querySelector("#pCountry").value;
    let addL1 = document.querySelector("#addL1").value;
    let cityChoose = document.querySelector("#pCity").value;
    let stateChoose = document.querySelector("#pState").value;
    let zipCode = document.querySelector("#pZip").value;
    let phoneNum = document.querySelector("#pPhone").value;

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
    }


    let obj = {
        uFirstName: pform.pName.value,
        uLastName: pform.lastName.value,
        uCountry: pform.pCountry.value,
        uAddress: {
            add1: pform.addL1.value,
            add2: pform.addL2.value,
            add3:function () {
                return  pform.addL3.value
            }
        },
        uCity: pform.pCity.value,
        uState: pform.pState.value,
        uZipCode: pform.pZip.value,
        uPhone: pform.pPhone.value
    }


    if (document.getElementById("chkInput").checked){
        checkBillingAdd(obj)
    }

    console.log(obj);

    localStorage.setItem("userAddress", JSON.stringify(obj));

    // window.location.href="payment.html";
}

document.querySelector("#save-btn").addEventListener("click", addressCollection)


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









