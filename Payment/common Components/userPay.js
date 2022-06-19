let promo = ()=>{

    return ` <h2>Summary</h2>
    <div id="pLeft">
        <div>
            <div id="r1">
                <img id="prodImg" src="">
                <p id="last-left"></p>
            </div>
        </div>
        <div id="pri">
            <p id="prodName"></p>
            <p></p>
        </div>
    </div>
    <div id="pDelivery">
        <p>Delivery</p>
        <p id="delCharges"></p>
    </div>
    <div id="pTotal">
        <p>Total</p>
        <div id="totalPrice">
            <p></p>
            <p></p>
        </div>
    </div>
    `
}


let purchaseDesplay = (arrData, appContainer)=>{
    console.log(arrData);

    arrData.forEach((element) => {
        let maindiv1 = document.createElement("div");
        maindiv1.setAttribute("id","pLeft");

        let subdiv1 = document.createElement("div");

        let dipdiv1 = document.createElement("div");
        dipdiv1.setAttribute("id", "r1");

        //Product image
        let prodImg = document.createElement("img");
        prodImg.src=element.image;
        prodImg.setAttribute("id", "prodImg");


        prodImg.onmouseover=()=>{
            prodImg.src=element.img2;

            prodImg.style.height = "200px";
            prodImg.style.width = "200px";
        }

        prodImg.onmouseout=()=>{
            prodImg.src=element.image;

            prodImg.style.height = "70px";
            prodImg.style.width = "70px";
        }

        let random = Math.floor(Math.random()*5)+1;

        let lastLeft =document.createElement("p");
        lastLeft.setAttribute("id", "last-left");
        lastLeft.innerText=`Last ${random} left`;

        dipdiv1.append(prodImg, lastLeft);

        subdiv1.append(dipdiv1);

        let subdiv2 = document.createElement("div");
        subdiv2.setAttribute("id", "pri")

        let prodName = document.createElement("p");
        prodName.setAttribute("id", "prodName");
        prodName.innerText=element.name;

        // price
        let prodPrice = document.createElement("p");
        prodPrice.innerText="$"+element.price;

        let priceNum = (+element.price);

        subdiv2.append(prodName, prodPrice);

        maindiv1.append(subdiv1, subdiv2);

        let maindiv2 = document.createElement("div");
        maindiv2.setAttribute("id", "pDelivery");

        // delcharge
        let deliveryTxt = document.createElement("p");
        deliveryTxt.innerText="Delivery"

        let delCharge = 24.00;

        let deliveryCharge = document.createElement("p");
        deliveryCharge.innerText="$"+delCharge;

        maindiv2.append(deliveryTxt, deliveryCharge);


        let maindiv3 =  document.createElement("div");
        maindiv3.setAttribute("id", "pTotal");

        let totalTxt = document.createElement("p");
        totalTxt.innerText="Total"

        let subdiv3= document.createElement("div");

        // total price
        let totalCal = priceNum+delCharge;

        let totalPrice = document.createElement("p");
        totalPrice.innerText="$"+totalCal;

        let duties = document.createElement("p");
        duties.innerText="Import duties included";

        subdiv3.append(totalPrice, duties);

        maindiv3.append(totalTxt, subdiv3);


        appContainer.append(maindiv1, maindiv2, maindiv3);

    });
}

export {promo, purchaseDesplay};