var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomdice_image = "images/dice"+randomnumber1+".png"; 
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomdice_image);
var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomdice2_image = "images/dice"+randomnumber2+".png"; 
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomdice2_image);

if(randomnumber1 > randomnumber2){
   document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "Player2 wins";
}
else{document.querySelector("h1").innerHTML ="Draw";}