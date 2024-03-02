let num1 = Math.random() * 6;
num1 = Math.floor(num1) + 1;
console.log("Num1 = " + num1);

let num2 = Math.random() * 6;
num2 = Math.floor(num2) + 1;
console.log("Num2 = " + num2);

let newname1 = "dice" + num1 + ".png"; 
console.log(newname1);
let newname2 = "dice" + num2 + ".png"; 
console.log(newname2);
document.querySelectorAll("img")[0].setAttribute("src",newname1);
document.querySelectorAll("img")[1].setAttribute("src",newname2);
if(num2 > num1){

    document.querySelectorAll("h1")[0].innerHTML = "Player 2 wins";
    //console.log();
}else if(num1 > num2){
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 wins";

   // console.log("player 1 wins");
}else{
    document.querySelectorAll("h1")[0].innerHTML = "DRAW";

    //console.log("DRAW");
}
