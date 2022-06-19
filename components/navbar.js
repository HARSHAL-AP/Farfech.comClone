function navbar(){
  return ` <div id="navhead">
  <div id="pagees">
    <p><a href="/PROJECT/womens.html" >Women</a></p>
    <p><a href="./Womespage/womenpage.html">Men</a></p>
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
    <div id="id01" class="ising">
              <div class="id02">
                <div class="imgcontainer">
                  <p>Come on in</p>
                  <span
                    onclick="document.getElementById('id01').style.display='none'"
                    class="closeee"
                    title="Close Modal"
                    >&times;</span
                  >
                </div>
                <div class="cominbutons">
                  <button class="sigbunn" id="sib1" onclick="changeform1()">
                    SIGN IN
                  </button>
                  <button class="sigbunn" onclick="changeform2()">
                    I'M NEW HERE
                  </button>
                </div>
  
                <form id="form">
                  <h2 class="naming">Email</h2>
                  <input type="text" name="emails" id="emails" />
                  <h2 class="naming">Password</h2>
                  <input type="password" name="pass" id="password" />
  
                  <div id="checkbox">
                    <input class="hfglp" type="checkbox" />
                    <p>Keep me signed in. What isthis?</p>
                  </div>
  
                  <div id="forgot">
                    <a href="">Forgot your password?</a>
                  </div>
                  <button id="submit" onclick="signuser()">Sign In</button>
                </form>
                <p id="or">OR</p>
                <button class="conitinewwith">
                  <img
                    id="googleIcon"
                    src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                    alt=""
                  />Continue With Google
                </button>
                <button class="conitinewwith">
                  <img
                    id="appleIcon"
                    src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
                    alt=""
                  />Continue With Apple
                </button>
                <button class="conitinewwith">
                  <img
                    id="facebookIcon"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
                    alt=""
                  />Continue With Facebook
                </button>
                <button id="newtofar" onclick="changeform2()">
                  New to FARFETCH? Register
                </button>
              </div>
            </div>
    <button onclick="document.getElementById('id01').style.display='block'"
    style="width: auto">
      <span class="material-symbols-outlined"> person </span>
      <p id="namefd" maxlength="10"></p>
    </button>
    <button>
      <span class="material-symbols-outlined"> favorite </span>
    </button>
    <button>
     <a href="/shopingbag/shoppingbag.html"><span class="material-symbols-outlined"> shopping_bag </span></a> 
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
  
  function navbarForproductpages(){
    return ` <div id="navhead">
    <div id="pagees">
      <p><a>Women</a></p>
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
      <div id="id01" class="ising">
        <div class="id02">
          <div class="imgcontainer">
            <p>Come on in</p>
            <span
              onclick="document.getElementById('id01').style.display='none'"
              class="closeee"
              title="Close Modal"
              >&times;</span
            >
          </div>
          <div class="cominbutons">
            <button class="sigbunn" id="sib1" onclick="changeform1()">
              SIGN IN
            </button>
            <button class="sigbunn" onclick="changeform2()">
              I'M NEW HERE
            </button>
          </div>
  
          <form id="form">
            <h2 class="naming">Email</h2>
            <input type="text" name="emails" id="emails" />
            <h2 class="naming">Password</h2>
            <input type="password" name="pass" id="password" />
  
            <div id="checkbox">
              <input class="hfglp" type="checkbox" />
              <p>Keep me signed in. What isthis?</p>
            </div>
  
            <div id="forgot">
              <a href="">Forgot your password?</a>
            </div>
            <button id="submit" onclick="signuser()">Sign In</button>
          </form>
          <p id="or">OR</p>
          <button class="conitinewwith">
            <img
              id="googleIcon"
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt=""
            />Continue With Google
          </button>
          <button class="conitinewwith">
            <img
              id="appleIcon"
              src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
              alt=""
            />Continue With Apple
          </button>
          <button class="conitinewwith">
            <img
              id="facebookIcon"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
              alt=""
            />Continue With Facebook
          </button>
          <button id="newtofar" onclick="changeform2()">
            New to FARFETCH? Register
          </button>
        </div>
      </div>
      <button
        onclick="document.getElementById('id01').style.display='block'"
        style="width: auto"
      >
        <span class="material-symbols-outlined"> person </span>
        <p id="namefd" maxlength="10"></p>
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
    <div id="dropboxes">
      <div class="subnav">
        <button class="subnavbtn" id="saletab"><a href="/PROJECT/navOptions/sale.html" id="sale">Sale</a></button>
        <div class="subnav-content">
          <div class="catlistbox">
            <div>
              <div class="catlist">
                <ul>
                  SALE
                </ul>
                <li>All sale</li>
                <li>Sale clothing</li>
                <li>Sale dresses</li>
                <li>Sale tops</li>
                <li>Sale shoes</li>
                <li>Sale booots</li>
                <li>Sale trainers</li>
                <li>Sale bags</li>
                <li>Sale accessories</li>
              </div>
              <div class="catlist">
                <ul>
                  STYLE
                </ul>
                <li>Sale classic</li>
                <li>Sale expressionist</li>
                <li>Sale glamour</li>
                <li>Sale hype strrtwear</li>
                <li>Sale minimalism</li>
                <li>Sale modern femininity</li>
              </div>
            </div>
            <div>
              <div class="catlist">
                <ul>
                  EDITORS PICKS
                </ul>
                <li>New in to sale</li>
                <li>Best of sale</li>
                <li>Favourite designers on sale</li>
              </div>
              <div class="catlist"></div>
            </div>
            <div id="catimg">
              <img
                src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/AW21%20Sale/Main/MEGANAV_MAIN-SALE.png"
                alt=""
              />
              <p>Women</p>
              <h5>THE FARFETCH SALE: GET UP TO 50% OFF NOW</h5>
              <a href="">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn"> <a href="/PROJECT/navOptions/newIn.html">New In</a></button>
        <div class="subnav-content">
          <div class="catlistbox">
            <div>
              <div class="catlist">
                <ul>
                  WHAT'S NEW
                </ul>
                <li>New in today</li>
                <li>New: classic</li>
                <li>New: expressinist</li>
                <li>New: glamour</li>
                <li>New: type streetwear</li>
                <li>New: minimalism</li>
                <li>New: modern femininity</li>
              </div>
              <div class="catlist">
                <ul>
                  TRENDING NOW
                </ul>
                <li>52 fashion flip-flop</li>
                <li>Vacation style</li>
                <li>75 straw accessories</li>
                <li>Creochet details</li>
                <li>Graphic print</li>
              </div>
            </div>
            <div>
              <div class="catlist">
                <ul>
                  DISCOVER
                </ul>
                <li>99 new season must-have</li>
                <li>Back by popular demand</li>
                <li>Exclusive & collabs</li>
                <li>25 names to know</li>
              </div>
              <div class="catlist">
                <ul>
                  THE HIGHLIGHTS
                </ul>
                <li>All articles</li>
                <li>Street styles</li>
                <li>How to</li>
                <li>Brand we love</li>
                <li>Trends</li>
                <li>Bountique directory</li>
                <li>Counscious fashion</li>
              </div>
            </div>
            <div id="catimg2">
              <img
                src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/15-06-2022/WW/15-06-WW-NEW_IN-CROCHET-DETAILS.jpg"
                alt=""
              />
              <p>Spotlight On</p>
              <h5>CROCHET DETAILS</h5>
              <a href="">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn"><a href="/PROJECT/navOptions/shopBy.html">Shop By</a></button>
        <div class="subnav-content">
          <div class="catlistbox">
            <div>
              <div class="catlist">
                <ul>
                  MOMENTS
                </ul>
                <li>The wedding guest edit</li>
                <li>The modern wedding</li>
                <li>Find the perfect gift</li>
                <li>The resort collection</li>
              </div>
              <div class="catlist">
                <ul>
                  DISCOVER
                </ul>
                <li>The bestsellers</li>
                <li>150 most-wanted pieces</li>
                <li>Conscious</li>
                <li>fashion Icons</li>
                <li>Top 100 iconic bags</li>
                <li>Best of streetwear</li>
                <li>Matching sets</li>
                <li>The best female designers</li>
                <li>Wardobe essentials</li>
                <li>Back designer</li>
              </div>
            </div>
            <div>
              <div class="catlist">
                <ul>
                  BOUTIQUE GUIDES
                </ul>
                <li>The classic edit</li>
                <li>The expressionist edit</li>
                <li>the modern femininity edit</li>
                <li>The minimalist edit</li>
              </div>
              <div class="catlist"></div>
            </div>
            <div id="catimg3">
              <img
                src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/08-06-2022/WW/08-06-WW-SHOP_BY-FASHION_ICONS.jpg"
                alt=""
              />
              <p>Spotlight On</p>
              <h5>FHASHION ICONS</h5>
              <a href="">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn"><a href="/PROJECT/navOptions/brands.html">Brands</a></button>
        <div class="subnav-content">
          <div class="catlistbox">
            <div>
              <div class="catlist">
                <ul>
                  FEATURED BRANDS
                </ul>
                <li>Fashion Icons</li>
                <li>Alexander McQueen</li>
                <li>Balenciaga</li>
                <li>Balmain</li>
                <li>Bottega Veneta</li>
                <li>Burberry</li>
                <li>Dolce & Gabbana</li>
                <li>Gucci</li>
                <li>Off-White</li>
                <li>Prada</li>
                <li>Saint Laurent</li>
                <li>Valentino gravani</li>
                <li>versace</li>
              </div>
              <div class="catlist"></div>
            </div>
            <div>
              <div class="catlist"></div>
              <div class="catlist"></div>
            </div>
            <div id="catimg4">
              <img
                src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/15-06-2022/WW/15-06-WW-DESIGNERS-GUCCI.jpg"
                alt=""
              />
              <p>Brand Focus</p>
              <h5>GUCCI</h5>
              <a href="">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn"><a href="/PROJECT/navOptions/clothing.html">Clothing</a></button>
        <div class="subnav-content">
          <div class="catlistbox">
            <div>
              <div class="catlist">
                <ul>
                  CLOTHING
                </ul>
                <li>New in clothing</li>
                <li>All clothing</li>
                <li>beachwear</li>
                <li>Denim</li>
                <li>Dresses</li>
                <li>Jackets</li>
                <li>Knitwear</li>
                <li>Lingeri</li>
                <li>Skirts</li>
                <li>Suits & Tailoring</li>
                <li>Tops</li>
                <li>Pants</li>
                <li>Sale Clothing</li>
              </div>
              <div class="catlist">
                <ul>
                  FEATURED BRANDS
                </ul>
                <li>Alexander McQueen</li>
                <li>Balenciaga</li>
                <li>Balmain</li>
                <li>Bottega Veneta</li>
                <li>Burberry</li>
                <li>Dolce & Gabbana</li>
                <li>Gucci</li>
                <li>Off-White</li>
                <li>Prada</li>
                <li>Saint Laurent</li>
                <li>There Was one</li>
                <li>versace</li>
                <li>Zimmermann</li>
              </div>
            </div>
            <div>
              <div class="catlist">
                <ul>
                  DISCOVER
                </ul>
                <li>Bridal</li>
                <li>Conscious activewear</li>
                <li>Conscious clothing</li>
                <li>Matching sets</li>
                <li>Modest dressing</li>
                <li>Partywear</li>
                <li>Warrobe essentials</li>
              </div>
              <div class="catlist">
                <ul>
                  DONATE & REPAIR
                </ul>
                <li>Donate pre-loved pieces</li>
                <li>Repair and Revive</li>
                <li>Sustainability at FATFETCH</li>
              </div>
            </div>
            <div id="catimg5">
              <img
                src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/15-06-2022/WW/15-06-WW-CLOTHING-GRAPHIC-PRINTS.jpg"
                alt=""
              />
              <p>Spotlite on</p>
              <h5>GRAPHIC PRINT</h5>
              <a href="">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn"><a href="/PROJECT/navOptions/shoes.html">Shoes</a></button>
        <div class="subnav-content">
          <div class="catlistbox">
            <div>
              <div class="catlist">
                <ul>
                  SHOES
                </ul>
                <li>New in shoes</li>
                <li>All shoes</li>
                <li>Boot</li>
                <li>Espadrilles</li>
                <li>Slides & flip flops</li>
                <li>Loafers</li>
                <li>Mules</li>
                <li>Pumps</li>
                <li>Sandals</li>
                <li>Sneakers</li>
                <li>Conscious shoes</li>
                <li>Sale shoes</li>
              </div>
              <div class="catlist">
                <ul>
                  FEATURED BRANDS
                </ul>
                <li>AMina Musddi</li>
                <li>BAlenciaga</li>
                <li>Dolece & Gabbana</li>
                <li>Gucci</li>
                <li>Jimmy Choo</li>
                <li>Jordan</li>
                <li>Off-White</li>
                <li>Prada</li>
                <li>Saint Laurent</li>
                <li>Valentino Garavani</li>
              </div>
            </div>
            <div>
              <div class="catlist">
                <ul>
                  DONATE & REPAIR
                </ul>
                <li>Donate pe-loved pieces</li>
                <li>Repair and Revive</li>
                <li>Sustainability at FARFETCH</li>
              </div>
              <div class="catlist"></div>
            </div>
            <div id="catimg6">
              <img
                src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/01-06-2022/WW/01-06-WW-SHOES-PUMPS.jpg"
                alt=""
              />
              <p>Brand Focus</p>
              <h5>PUMPS</h5>
              <a href="">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn"> <a href="/PROJECT/navOptions/bags.html">Bags</a></button>
        <div class="subnav-content">
          <div class="catlistbox">
            <div>
              <div class="catlist">
                <ul>
                  BAGS
                </ul>
                <li>New in bags</li>
                <li>Exclusive</li>
                <li>All bags</li>
                <li>Bucket bags</li>
                <li>Clutch bags</li>
                <li>Mini bags</li>
                <li>Cross-body bags</li>
                <li>Shoulder bags</li>
                <li>Tote bags</li>
                <li>Pre-owned bags</li>
                <li>Sale bags</li>
              </div>
              <div class="catlist">
                <ul>
                  FEATURED BRANDS
                </ul>
                <li>AMina Musddi</li>
                <li>BAlenciaga</li>
                <li>Dolece & Gabbana</li>
                <li>Gucci</li>
                <li>Jimmy Choo</li>
                <li>Jordan</li>
                <li>Off-White</li>
                <li>Prada</li>
                <li>Saint Laurent</li>
                <li>Valentino Garavani</li>
              </div>
            </div>
            <div>
              <div class="catlist">
                <ul>
                  ICONIC COLLECTION
                </ul>
                <li>All Iconic bags</li>
                <li>Balenciaga Hourglass</li>
                <li>Bottega Olympia</li>
                <li>Chanel 2.55 pre-qwned</li>
                <li>Gucci GG Marmont</li>
                <li>Gucci Dionysus</li>
                <li>Prada Cleo</li>
              </div>
              <div class="catlist">
                <ul>
                  SELL DONATE,REPAIR
                </ul>
                <li>Sell designer bags</li>
                <li>Repair and Revive</li>
                <li>Substainability at FARFETCH</li>
              </div>
            </div>
            <div id="catimg7">
              <img
                src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/01-06-2022/WW/01-06-WW-BAGS-CLUTCH_BAGS.jpg"
                alt=""
              />
              <p>Spoltlight On</p>
              <h5>CLUTCH BAGS</h5>
              <a href="">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn"><a href="/PROJECT/navOptions/accessories.html">Accessories</a></button>
        <div class="subnav-content">
          <div class="catlistbox">
            <div>
              <div class="catlist">
                <ul>
                  ACCESSORIES
                </ul>
                <li>All accessories</li>
                <li>Belts</li>
                <li>Gifts</li>
                <li>Gloves</li>
                <li>Headband & hair clips</li>
                <li>Hats & caps</li>
                <li>scaves</li>
                <li>Sunglasses</li>
                <li>Wallets & cardholders</li>
                <li>Conscious accessories</li>
                <li>Sale accessories</li>
              </div>
              <div class="catlist"></div>
            </div>
            <div>
              <div class="catlist">
                <ul>
                  HOMEWARE
                </ul>
                <li>All homeware</li>
                <li>Candles & home fragrance</li>
                <li>Home accessories</li>
                <li>Furniture</li>
                <li>Soft furnishing</li>
                <li>Stationery & books</li>
                <li>Tableware</li>
              </div>
              <div class="catlist"></div>
            </div>
            <div id="catimg8">
              <img
                src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/01-06-2022/WW/01-06-WW-ACCESSORIES-HATS.jpg"
                alt=""
              />
              <p>Spoltlight On</p>
              <h5>HATS</h5>
              <a href="">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn">Jewelry</button>
        <div class="subnav-content">
          <div class="catlistbox">
            <div>
              <div class="catlist">
                <ul>
                  FASHION JEWELRY
                </ul>
                <li>New in jewelry</li>
                <li>all fashion jewelry</li>
                <li>Bracelets</li>
                <li>Earrings</li>
                <li>Necklaces</li>
                <li>Rings</li>
                <li>Watches</li>
                <li>Pre-owned jwelry</li>
                <li>Conscious jewelry</li>
                <li>Consious jewelry</li>
                <li>Sale jewelry</li>
              </div>
              <div class="catlist">
                <ul>
                  FINE JEWELRY
                </ul>
                <li>All fine jewelry</li>
                <li>Fine bracelets</li>
                <li>Fine earings</li>
                <li>Fine necklaces</li>
                <li>Fine rings</li>
                <li>Fine watches</li>
                <li>All demi-fine jwelry</li>
                <li>Pre-owned jwelry</li>
                <li>Pre-owned fine watches</li>
              </div>
            </div>
            <div>
              <div class="catlist">
                <ul>
                  DISCOVER
                </ul>
                <li>The fine jewelry</li>
                <li>Birthstones</li>
                <li>Engagements rings</li>
              </div>
              <div class="catlist">
                <ul>
                  FEATURED BRANDS
                </ul>
                <li>Boucheron</li>
                <li>Boghossian</li>
                <li>Chopard</li>
                <li>David Morris</li>
                <li>De Beers Jewellrs</li>
                <li>Foudrae</li>
                <li>Pomellato</li>
                <li>Rolex</li>
                <li>Shay</li>
                <li>Tasaki</li>
                <li>Van Cleef & Arpels</li>
                <li>Yoko Loundon</li>
              </div>
            </div>
            <div id="catimg9">
              <img
                src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/01-06-2022/WW/01-06-WW-JEWELLERY-LOVE-FOREVER-FINE-JEWELLERY%20(1).jpg"
                alt=""
              />
              <p>Spoltlight On</p>
              <h5>LOVE FOREVER JEWELRY</h5>
              <a href="">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn">Pre-Owned</button>
        <div class="subnav-content">
          <div class="catlistbox">
            <div>
              <div class="catlist">
                <ul>
                  PRE-OWNED BRANDS
                </ul>
                <li>Cartier</li>
                <li>Chanel</li>
                <li>Chistian Dior</li>
                <li>fendi</li>
                <li>Goyard</li>
                <li>Gucci</li>
                <li>Hermes</li>
                <li>Jean Paul Gaultier</li>
                <li>Louis Vuitton</li>
                <li>View all pre-owened brand</li>
              </div>
              <div class="catlist">
                <ul>
                  PRE-OWNED
                </ul>
                <li>New in pre-owned</li>
                <li>All pre-owned</li>
                <li>Accessories</li>
                <li>Bags</li>
                <li>Coats</li>
                <li>Dresses</li>
                <li>Fine watches</li>
                <li>jackets</li>
                <li>Jwelry</li>
                <li>Shoes</li>
                <li>Shoes</li>
                <li>Suits</li>
                <li>Watches</li>
                <li>Lifestyle pieces</li>
              </div>
            </div>
            <div>
              <div class="catlist">
                <ul>
                  ICONIC BAGS
                </ul>
                <li>All iconic bags</li>
                <li>Chanel 2.55</li>
                <li>Dior Saddle</li>
                <li>Lady Dior</li>
                <li>Hermes Birkin</li>
                <li>Hermes kelly</li>
                <li>Louis Vuitton monogram</li>
              </div>
              <div class="catlist">
                <ul>
                  SELL DONATE,REPAIR
                </ul>
                <li>Sell designer bags</li>
                <li>Donate pre-loved pieces</li>
                <li>Repair and Revive</li>
                <li>Substainability at FARFETCH</li>
              </div>
            </div>
            <div id="catimg10">
              <img
                src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/01-06-2022/WW/01-06-WW-PRE_OWNED-CHRISTIAN_DIOR.jpg"
                alt=""
              />
              <p>Spoltlight On</p>
              <h5>PRE-OWNED CHRISTIAN DIOR</h5>
              <a href="">leran more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div id="mmp">
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
  
  export {navbar,fotter,navbarForproductpages};