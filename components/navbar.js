function navbar(){
return ` <div id="navhead">
<div id="pagees">
  <p><a href="womenpage.html">women</a></p>
  <p><a>Men</a></p>
  <p><a>Kids</a></p>
</div>
<div id="mainlogo"><h1>FARFETCH</h1></div>
<div id="profile">
  <button>
    <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
      id="flag"
      alt=""
    />
  </button>
  <button>
    <span class="material-symbols-outlined"> person </span>
  </button>
  <button>
    <span class="material-symbols-outlined"> favorite </span>
  </button>
  <button>
    <span class="material-symbols-outlined"> shopping_bag </span>
  </button>
</div>
</div>
<div id="navsearch">
<div>
  <!-- trigger/to open the search popup  -->
  <input type="text" id="searchbar" placeholder="Search" />
  <button id="searchbutn">
    <i class="fa-solid fa-magnifying-glass"></i>
  </button>
</div>
</div>
<div id="myModal" class="modal">
<!-- Modal content -->
<div class="modal-content">
  <div class="logobox">
    <div class="sirlogo"><h1>FARFETCH</h1></div>
    <div class="serlogo">
      <input type="search" placeholder="Search" id="searchpro" />
      <button id="mainsearchbutton">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </div>
  <span class="close">&times;</span>
</div>
</div>`
}

function fotter(){
  return `<div id="footer">
  <div class="fott">
    <p class="appios">FARFETCH APP</p>
    <p class="appios">Farfetch app for iOS and Android</p>
  </div>
  <div class="fott">
    <p class="appios">
      DESTINATION/REGION, CURRENCY AND LANGUAGE India, USD $
    </p>
    <p class="appios">FOLLOW US</p>
    <div id="socialmediaicon">
      <button><i class="fa-brands fa-instagram"></i></button>
      <button><i class="fa-brands fa-facebook"></i></button>
      <button><i class="fa-brands fa-twitter"></i></button>
      <button><i class="fa-brands fa-snapchat"></i></button>
      <button><i class="fa-brands fa-pinterest-p"></i></button>
      <button><i class="fa-brands fa-youtube"></i></button>
    </div>
  </div>
  <div id="fottt">
    <div class="servisec">
      <p class="appios">CUSTOMER SERVICE</p>
      <li>Contact us</li>
      <li>Orders & delivery</li>
      <li>Payment & pricing</li>
      <li>Return & refunds</li>
      <li>FAQs</li>
      <li>Terms & conditions</li>
      <li>Promotion terms & conditions</li>
      <li>Privacy policy</li>
      <li>Accessibility</li>
    </div>
    <div class="servisec">
      <p class="appios">ABOUT FARFETCH</p>
      <li>About Us</li>
      <li>Investors</li>
      <li>Boutique Partners</li>
      <li>Affiliate Programme</li>
      <li>Student discount UNiDAYS</li>
      <li>Youth discount</li>
      <li>Careers</li>
      <li>Customer Promise</li>
      <li>FARFETCH App</li>
      <li>Sitemap</li>
      <li>Positively FARFETCH</li>
    </div>
  </div>
</div>`
}
export {navbar,fotter};