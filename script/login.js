var pop = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == pop) {
    pop.style.display = "none";
  }
};




function changeform1(){
    document.getElementById("form").innerHTML=`<h2 class="naming">Email</h2>
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
    <button id="submit" onclick="signuser()">Sign In</button>`
    document.getElementById("newtofar").innerHTML=` New to FARFETCH? Register`;
}

function changeform2(){
    document.getElementById("form").innerHTML=` <h2>Name</h2>
    <input class="hfglp" type="text" id="name1" />
    <h2>Email Address</h2>
    <input class="hfglp" type="text" naem="email" id="email1" />
    <h2>Password</h2>
    <input class="hfglp" type="password" name="pass" id="password1" />
    <p>
      By registering, you agree with our Terms & Conditions and
      Privacy and Cookie Policy.
    </p>
    <div id="checkbox2">
      <input class="hfglp2" type="checkbox" />
      <p>
        Sign up early Sale access plus tailored new arrivals,trends
        and promotions. <span>Find out more.</span>To opt, click
        unsubscribe in our email.
      </p>
    </div>
    <button id="submit1" onclick="regiuser()" >Register</button>`

    document.getElementById("newtofar").innerHTML=null;
}

var store_data=JSON.parse(localStorage.getItem("userData"))

var form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();

   
});

function signuser(){
  var data={
    email:form.emails.value,
    password:form.password.value,
};
console.log(data)
if(store_data===null)
{
    alert("Please create an account!!");
}
else if(store_data.email===data.email && store_data.password===data.password){
    alert("Sign In Sucessfully");
     window.location.href="";
   
}

else{
    alert("User Does not exixt")
}
}


function regiuser(){
  var data={
    name:form.name1.value,
    email:form.email1.value,
    password:form.password1.value
}
console.log(data);
localStorage.setItem("userData",JSON.stringify(data))
}

var form=document.querySelector("form");

form.addEventListener("submit1", function(event){
    event.preventDefault();

//    var data={
//        name:form.name1.value,
//        email:form.email1.value,
//        password:form.password1.value
//    }
//    console.log(data);
//    localStorage.setItem("userData",JSON.stringify(data))
//    // window.location.href="";
});
