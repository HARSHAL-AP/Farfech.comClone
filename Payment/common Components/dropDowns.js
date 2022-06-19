let helpDropDownTags = ()=>{
    return `<div id="imageBox">
    <img src="./Assets/phone 2.jpg" alt="" />
    <h4 id="makeCall">Make a call from</h4>
    <button id="x"><i class="fa-duotone fa-x"></i></button>
  </div>
  <div id="activeBox">
    <p class="activeToday"><i class="fa-solid fa-mobile-screen-button"></i> Xiaomi phone</p>
    <p class="Act">Active today</p>
  </div>
  <p class="activeToday"><i class="fa-solid fa-up-right-from-square"></i> Pick an app</p>`
}


let helpDropDownFunc = ()=>{
    let helpInvoked=()=>{
        let showHelp = document.querySelector("#needHelpDropDwn");
        if (showHelp.style.display==="none"){
            showHelp.style.display="block";
        }
        else {
            showHelp.style.display="none";
        }
    }
    document.getElementById(`clicked`).addEventListener("click", helpInvoked);
    document.getElementById("numClick").addEventListener("click", helpInvoked);

    let xRemove=()=>{
        let showHelp = document.querySelector("#needHelpDropDwn");
        if (x){
            showHelp.style.display="none";
        }
    }
    document.querySelector("#x").addEventListener("click", xRemove)
}


let footNeedHelpDropDwnFunc = ()=>{
    let helpInvoked=()=>{
        let showHelp = document.querySelector("#footNeedHelpDropDwn");
        if (showHelp.style.display==="none"){
            showHelp.style.display="block";
        }
        else {
            showHelp.style.display="none";
        }
    }
    document.getElementById(`fclicked`).addEventListener("click", helpInvoked);
    document.getElementById(`fNumClick`).addEventListener("click", helpInvoked);

    let xRemove2=()=>{
        let showHelp = document.querySelector("#footNeedHelpDropDwn");
        if (x){
            showHelp.style.display="none";
        }
    }
    document.querySelector("#x").addEventListener("click", xRemove2)
}

export {helpDropDownTags, helpDropDownFunc, footNeedHelpDropDwnFunc};