import { navbar, fotter } from "/components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("fotter").innerHTML = fotter();

let arr= JSON.parse(localStorage.getItem("arr")) || [];

// let arr = [
//   {
//     id:4,
//     image:"https://cdn-images.farfetch-contents.com/17/93/96/16/17939616_40034532_480.jpg",
//     img2:"https://cdn-images.farfetch-contents.com/17/93/96/16/17939616_40034505_1000.jpg",
//     brand:"ZIMMERMANN",
//     name:"Anneke mix-print midi dress",
//     type: "clothing",
//     price: 1820,
//     qty: 1,

// },
// {
//     id:5,
//     image:"https://cdn-images.farfetch-contents.com/17/24/95/96/17249596_38000909_1000.jpg",
//     img2:"https://cdn-images.farfetch-contents.com/17/24/95/96/17249596_37999896_1000.jpg", 
//     brand:"Burberry",
//     name:"Matelasses single breasted jacket",
//     type: "clothing",
//     price: 1685,
//     qty: 1,

// },
// {
//     id:6,
//     image:"https://cdn-images.farfetch-contents.com/17/70/19/36/17701936_39803374_480.jpg",
//     img2:"https://cdn-images.farfetch-contents.com/17/70/19/36/17701936_39858339_1000.jpg", 
//     brand:"Frankie shop",
//     name:"Astra bommber jacket",
//     type: "clothing",
//     price: 615,
//     qty: 1,
    
// },
// {
//     id:7,
//     image:"https://cdn-images.farfetch-contents.com/17/59/07/59/17590759_40022255_480.jpg",
//     img2:"https://cdn-images.farfetch-contents.com/17/59/07/59/17590759_40023863_1000.jpg",
//     brand:"Off-White",
//     name:"LAUNDRY CARGO TRACKPANT NUDE NUDE",
//     type: "clothing",
//     price: 891,
//     qty: 1,

// },
// {
//     id:8,
//     image:"https://cdn-images.farfetch-contents.com/18/58/59/66/18585966_40133011_480.jpg",
//     img2:"https://cdn-images.farfetch-contents.com/18/58/59/66/18585966_40133013_1000.jpg", 
//     brand:"Bottega Veneta",
//     name:"Long-sleeved knitted polo top",
//     type: "clothing",
//     price: 2253,
//     qty: 1,

// },
//   
// ];
// localStorage.setItem("arr", JSON.stringify(arr));

console.log(arr.length);

let container = document.getElementById("payout_box");
if (arr.length >= 1) {
  let mrp = 0;

  arr.forEach(function (el, index) {
    let image = el.image;
    let name = el.name;
    let price = el.price;
    let desc = el.desc;

    let div = document.createElement("div");
    div.id = "_996633";

    let cartitems = document.createElement("div");
    cartitems.id = "cartitems";

    let _b7db16 = document.createElement("div");
    _b7db16.className = "_b7db16";
    let _684096 = document.createElement("div");
    _684096.className = "_684096";
    _684096.innerHTML = `<span data-flag="flag-it"
style="background-position: -1982px center; background-image: url(&quot;https://cdn-static.farfetch-contents.com/assets/portal-core-appportal/images/flags.3a541ba7fd2f2a9.jpg&quot;);"
class="flagIcon" data-testid="itemGroupHeader-countryFlag"></span>
<div>Sending from <span
        class="countryName">Italy</span>`;
    let _e2b53e = document.createElement("div");
    _e2b53e.className = "_e2b53e";
    _e2b53e.innerHTML = ` <div class="_7b9753">
<div class="_1fe24a" data-testid="itemGroupHeader-duties">Import duties are included.</div>
</div>`;

    let productDetails = document.createElement("div");
    productDetails.id = "productDetails";

    let img = document.createElement("img");
    img.src = image;

    let productdescription = document.createElement("div");
    productdescription.id = "productDescription";
    productdescription.innerHTML = `<p>New Season</p>
<h3>${name}</h3>
<h4>${desc}</h4>
<h4>FARFETCH ID: 
    18444185</h4>
    <h5>Last 1 left</h5>`;

    let prices = document.createElement("div");
    prices.className = "prices";
    prices.innerHTML = `<h4>$${price}</h4>
<p>(Import duties includes)</p>`;

    let quantity = document.createElement("div");
    quantity.className = "quantity";

    let p1 = document.createElement("p");
    p1.innerText = "Size";
    let span1 = document.createElement("span");
    span1.innerText = "40 IT";
    let a1 = document.createElement("a");
    a1.className = "_05226";
    a1.href = "#";
    a1.innerText = "Chnage";

    let p2 = document.createElement("p");
    p2.innerText = "Quantity";
    let sl = document.createElement("input");
    sl.value = el.qty;

    sl.id = "quantity";
    sl.type = "number";
    sl.addEventListener.onclick = function () {
      el.qty = sl.value;
      console.log("el.qty")
    //   mrp += el.price * el.qty;

      window.location.reload();
    };
    // console.log(document.getElementById("quantity").value)
    let h1 = document.createElement("h5");
    let span2 = document.createElement("span");
    span2.innerText = "♡";
    let a2 = document.createElement("a");
    a2.className = "_05226";
    a2.addEventListener.onclick = function () {
      storeToWish(el, index);
    };
    a2.innerText = "Move to wishlist";

    let removeIt = document.createElement("button");
    removeIt.id = "removeIt";
    removeIt.innerText = "⨯";
    removeIt.onclick = function () {
      removeIts(el, index);
    };

    h1.append(span2, a2);
    p2.append(sl);
    span1.append(a1);
    quantity.append(p1, span1, p2, h1);

    productDetails.append(img, productdescription, prices, quantity, removeIt);
    _b7db16.append(_684096, _e2b53e);

    cartitems.append(_b7db16, productDetails);

    div.append(cartitems);
    container.append(div);

    // let flagIcon = document.createElement("span")
    // flagIcon.className="flagIcon"
    // flagIcon.innerHTML=``

    // document.getElementsById("removeIt").addEventListener("click",function() {

    // })
    function removeIts(el, index) {
      console.log("Removing");
      arr.splice(index, 1);
      localStorage.setItem("arr", JSON.stringify(arr));
      window.location.reload();
    }

    mrp += el.price * el.qty;
  });

  console.log(mrp);
  let dCharge = Math.floor((mrp / 100) * 2);
  console.log(dCharge);

  summaryBox(mrp, dCharge);
} else {
  document.getElementById(
    "emptybox"
  ).innerHTML = ` <div class="_61ff08" data-testid="infoBlock">
                    
<p>There's nothing in your bag, yet...</p>
</div>
<div class="_db3fd8" data-testid="newIn">
<div>
    <p class="_520b1c _b4693b">420</p>
    <p class="_b4693b">new items to shop</p>
</div>
<div class="_46a0d2" data-testid="newIn-images"><a 
        href="#" data-testid="newIn-imageLink">
        <picture>
            <source media=""
                srcset="https://cdn-images.farfetch-contents.com/18/03/61/45/18036145_40111502_170.jpg"><img
                src="https://cdn-images.farfetch-contents.com/18/03/61/45/18036145_40111502_170.jpg"
                alt="Shop Women" data-testid="newIn-featuredImage">
        </picture>
    </a></div>
</div>
<div data-testid="shoppingButtons"><a 
    href="womens.html" 
    class="shopwomen_button" >Shop Women</a></div>`;
}

function summaryBox(mrp, dCharge) {
  document.getElementById("summaryBox").innerHTML = `
    <div class="">
        <div class="_8182e4">
            <table class="_bba066">
                <caption class="_edb894 _953327" data-testid="summary-title">Summary</caption>
                <tbody class="_b4693b">
                    <tr>
                        <th scope="row" class="">Subtotal</th>
                        <td><span>$ ${mrp}.00</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Delivery</th>
                        <td><span>$ ${dCharge}.00 </span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="_0f4c8f"></td>
                    </tr>
                    <tr>
                        <th >Total</th>
                        <td class="">
                            <div>USD <span class="_ec791b">$${
                              mrp + dCharge
                            }.00</span></div>
                            <div class="_1fe24a" data-testid="summary-totalText">Import duties included</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="" data-testid="checkoutProvidersContainer"><a
                    class=" _737011"
                    href="delivery.html"
                    id="BasketGoToCheckout"><span>Go To
                        Checkout</span><svg data-component="Icon" class="_3dc882">
                        
                    </svg></a></div>
        </div>
    </div>`;
  document
    .getElementById("BasketGoToCheckout")
    .addEventListener("click", function () {
      let arr3 = {
        totalAmount: mrp + dCharge,
        dlvC : dCharge
      };

      localStorage.setItem("totalAmount", JSON.stringify(arr3)); // total amount stored for payment page
    });
}
