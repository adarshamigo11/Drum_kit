
for(var i=0; i < document.querySelectorAll(".drum").length; i ++)
{
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
  function handleClick(){
    
   var buttonInnerHTML = this.innerHTML;

   makeSound(buttonInnerHTML);
   }
} 




document.addEventListener("keydown",  function(event){
         
         makeSound(event.key);

});





function makeSound(key){
     
   switch (key){
   

      case "a":
      var tom1 = new Audio('tom-1.mp3');
      tom1.play();
      break;

      case "w":
      var tom2 = new Audio('tom-2.mp3');
      tom2.play();
      break;

      case "s":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;

      case "d":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;

      case "j":
      var tom5 = new Audio('crash.mp3');
      tom5.play();
      break;

      case "k":
      var tom6 = new Audio('kick-bass.mp3');
      tom6.play();
      break;

      case "l":
      var tom7 = new Audio('snare.mp3');
      tom7.play();
      break;
      default: alert("Invalid Input");

   }
}