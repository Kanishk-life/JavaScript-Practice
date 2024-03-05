
let len = document.querySelectorAll(".drum").length;


    
document.addEventListener("keypress",function (e) {   
let a = e.key; 
makeSound(a);
addAnimation(a);    
});



for(let i = 0; i < len; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    var value = this.innerHTML;
    makeSound(value);
    addAnimation(value);
  });
}


function makeSound(val){
  switch(val){
    case "w" :
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;
    case "a" :
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s" :
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "d" :
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case "j" :
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "k" :
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
    case "l" :
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
  }
}


function addAnimation(btn){
  let char = document.querySelector("."+btn);
  char.classList.add("pressed");

  setTimeout(function(){
    char.classList.remove("pressed");
  },100);
  
};
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

/*
if(seletorr.innerHTML === "w"){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      }
      else if(seletorr.innerHTML === 'a'){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
      }
      else if(seletorr.innerHTML === 's'){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      }
      else if(seletorr.innerHTML === 'd'){
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      }
      else if(seletorr.innerHTML === 'j'){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
      }
      else if(seletorr.innerHTML === 'k'){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
      }
      else if(seletorr.innerHTML === 'l'){
        var audio = new Audio("kick-bass.mp3sounds");
        audio.play();
      }
    });

*/