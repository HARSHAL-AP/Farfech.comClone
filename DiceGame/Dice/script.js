const dice  = document.getElementById("roll");

function dicegame(){
    //Dice-1
    var randomDice = Math.floor((Math.random()*6)+1);
    var diceLocation = "./DiceImg/"+"dice-"+randomDice+".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src",diceLocation);

    //Dice-2
    var randomDice2 = Math.floor((Math.random()*6)+1);
    var diceLocation2 = "./DiceImg/"+"dice-"+randomDice2+".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src",diceLocation2);

    //Dice-3
    var randomDice3 = Math.floor((Math.random()*6)+1);
    var diceLocation3 = "./DiceImg/"+"dice-"+randomDice3+".png";
    var img3 = document.querySelectorAll("img")[2];
    img3.setAttribute("src",diceLocation3);


    if(randomDice>randomDice2 && randomDice>randomDice3){
        document.querySelector("h1").innerHTML = "🏆 Player 1 Wins! 🏆";
    }
    else if(randomDice2>randomDice && randomDice2>randomDice3){
        document.querySelector("h1").innerHTML = "🏆 Player 2 Wins! 🏆";
    }
    else if(randomDice3>randomDice2 && randomDice3>randomDice){
        document.querySelector("h1").innerHTML = "🏆 Player 3 Wins! 🏆";
    }
    else if(randomDice==randomDice2 && randomDice==randomDice3 && randomDice2==randomDice3){
        document.querySelector("h1").innerHTML = "Match Draws! 🏆";
    }
    else{
        document.querySelector("h1").innerHTML = "Error! <br> Roll again";
    }
}