let promo = ()=>{

    return ` <h2>Summary</h2>
    <!--This entire part should be dynamic-->
    <div id="pLeft">
        <div>
            <div id="r1">
                <img id="prodImg" src="#">
                <p id="last-left">Last 1 left</p>
            </div>
        </div>
        <div id="pri">
            <p id="prodName"></p>
            <p>$206.00</p>
        </div>
    </div>
    <div id="pDelivery">
        <p>Delivery</p>
        <p>$24.00</p>
    </div>
    <div id="pTotal">
        <p>Total</p>
        <div>
            <p>USD $230.00</p>
            <p>Import duties included</p>
        </div>
    </div>
    `
}


let purchaseDesplay = (arrData, appContainer)=>{
    console.log(arrData)

    arrData.forEach((element) => {
        let maindiv1 = document.createElement("div");
        maindiv1.setAttribute("id","pLeft");

        let subdiv1 = document.createElement("div");

        let dipdiv1 = document.createElement("div");
        dipdiv1.setAttribute("id", "r1");

        //Product image
        let prodImg = document.createElement("img");
        prodImg.src=element.Image;
        prodImg.setAttribute("id", "prodImg");

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