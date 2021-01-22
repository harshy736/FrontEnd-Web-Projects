var rand1 = Math.ceil(Math.random()*6);//generating random number from 1 to 6

var randomDiceImage1 = "images/dice" + rand1 + ".png";

var img1 = document.querySelector(".img1");

img1.setAttribute("src", randomDiceImage1);//setting src value to random dice

//for player 2
var rand2 = Math.ceil(Math.random()*6);//generating random number from 1 to 6

var randomDiceImage2 = "images/dice" + rand2 + ".png";

var img2 = document.querySelector(".img2");

img2.setAttribute("src", randomDiceImage2);//setting src value to random dice

if(rand1 > rand2) {
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}else if(rand1 < rand2) {
    document.querySelector("h1").textContent="Player 2 Wins🚩";
}else {
    document.querySelector("h1").textContent="Draw!";
}