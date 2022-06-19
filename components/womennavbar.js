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
    <div id="subnav">
    <p> <a href="./PROJECT/navOptions/sale.html">Sale</a> </p>
    <p> <a href="./PROJECT/navOptions/newIn.html">New In</a> </p>
    <p> <a href="./PROJECT/navOptions/shopBy.html">Shop By</a> </p>
    <p> <a href="./PROJECT/navOptions/brands.html">brands</a> </p>
    <p> <a href="./PROJECT/navOptions/clothing.html">Clothing</a> </p>
    <p> <a href="./PROJECT/navOptions/shoes.html">Shoes</a> </p>
    <p> <a href="./PROJECT/navOptions/bags.html">Bags</a> </p>
    <p> <a href="./PROJECT/navOptions/accessories.html">Accessories</a> </p>
    <p> <a href="./PROJECT/navOptions/jewelry.html">Jewelry</a> </p>
    <p> <a href="./PROJECT/navOptions/preOwned.html">Pre-owned</a> </p>
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
    export{navbar}

    