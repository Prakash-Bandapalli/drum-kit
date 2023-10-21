//for adding buttons
var N=document.querySelectorAll(".drum").length;
for(var i=0;i<N;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerhtml=this.innerHTML;
    makesound(buttonInnerhtml);
    buttonAni(buttonInnerhtml);
});
}
//for adding keyboard
document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonAni(event.key);
});

function makesound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        case "k":
            var bass=new Audio("sounds/kick-bass.mp3");
            bass.play();  
        case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        default:
            console.log("Invalid key: " + key);       
    }
}

function buttonAni(currentkey){
 var activebutton = document.querySelector("." + currentkey);//to get the key eg: .w-->represents class
 activebutton.classList.add("pressed");
 setTimeout(function(){
    activebutton.classList.remove("pressed");
 },100);
}