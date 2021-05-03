//Detecting button presses

for(var i=0; i< document.querySelectorAll(".drum").length; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){

   var buttonInnerHTML =  this.innerHTML;

   makeSound(buttonInnerHTML);

   buttonAnimation(buttonInnerHTML);
})

}

//Detecting keyboard presses

document.addEventListener("keydown",function(event){
    var keyPressed = event.key;

    makeSound(keyPressed);

    buttonAnimation(keyPressed);

})

function makeSound(eventType){

    switch (eventType) {

        case 'w':
         var tom_1 = new Audio('sounds/tom-1.mp3');
         tom_1.play();
        break;
        case 'a':
         var tom_2 = new Audio('sounds/tom-2.mp3');
         tom_2.play();
        break;
        case 's':
         var tom_3 = new Audio('sounds/tom-3.mp3');
         tom_3.play();
        break;
        case 'd':
         var tom_4 = new Audio('sounds/tom-4.mp3');
         tom_4.play();
        break;
        case 'j':
         var snare = new Audio('sounds/snare.mp3');
         snare.play();
        break;
        case 'k':
         var crash = new Audio('sounds/crash.mp3');
         crash.play();
        break;
        case 'l':
         var kick = new Audio('sounds/kick-bass.mp3');
         kick.play();
        break;
 
        default:
            console.log("Oops!");
            break;
    }

}

function buttonAnimation(eventKey){

    var activeButton = document.querySelector("."+eventKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);

}