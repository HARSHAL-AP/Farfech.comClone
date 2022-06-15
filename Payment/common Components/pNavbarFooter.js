let pNavbar = () => {
  return `<div id="checkouts">
        <span><i class="fa-solid fa-lock"></i></span>
        <h4>Secure Checkout</h4>
        <img src="./Assets/degicert.png" alt="degicert">
    </div>
    <div id="webLogo">
        <img src="./Assets/farfetch2.png" alt="farfetch">
    </div>
    <div id="pHelp">
        <h4>Need Help?</h4>
        <span><i class="fa-solid fa-phone"></i></span>
        <h4>(+44 (0) 20 3510 0670)</h4>
    </div>`;
};


let pFooter=()=>{
    return `<div id="pUserName">
        <!--show dynamic user name here,-->
        <h4>User name (dynamic)</h4>
        <a href="#">Sign out</a>
    </div>
    <div id="pHelp">
        <!--show dynamic location here-->
        <img src="#" alt="lg">
        <p>IN/USD ($)</p>
        <h4>Need Help?</h4>
        <span><i class="fa-solid fa-phone"></i></span>
        <h4>(+44 (0) 20 3510 0670)</h4>
    </div>`
}

export {pNavbar, pFooter};
