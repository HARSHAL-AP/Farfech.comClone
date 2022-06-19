let pNavbar = () => {
  return `<div id="checkouts">
        <span><i class="fa-solid fa-lock"></i></span>
        <h4>Secure Checkout</h4>
        <img src="./Assets/degicert.png" alt="degicert">
    </div>
    <div id="webLogo">
        <img id="switched" src="./Assets/farfetch2.png" alt="farfetch">
    </div>
    <div id="pHelp">
        <h4 id="clicked">Need Help?</h4>
        <span><i class="fa-solid fa-phone"></i></span>
        <h4 id="numClick">(+44 (0) 20 3510 0670)</h4>
    </div>`;
};


let pFooter=()=>{
    return `<div id="pUserName">
        <h4 id="dynaUser">User name (dynamic)</h4>
        <a href="../LoginPage/index.html">Sign out</a>
    </div>
    <div id="pHelp">
        <img id="countryLogo" src="./Assets/india logo.png" alt="lg">
        <p>IN/USD ($)</p>
        <h4 id="fclicked">Need Help?</h4>
        <span><i class="fa-solid fa-phone"></i></span>
        <h4 id="fNumClick">(+44 (0) 20 3510 0670)</h4>
    </div>`
}

export {pNavbar, pFooter};