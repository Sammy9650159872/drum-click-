var num= document.querySelectorAll(".drum").length;
for(let i=0;i<num;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
}
function handleclick(){
    var button = this.innerHTML;
    switch(button){
        case "w":
            var one= new Audio("sounds/tom-1.mp3");
            one.play();
            break;
        case "a":
            var two= new Audio("sounds/tom-2.mp3");
            two.play();
            break;
        case "s":
            var three= new Audio("sounds/tom-3.mp3");
            three.play();
            break;
        case "d":
            var four= new Audio("sounds/tom-4.mp3");
            four.play();
            break;


        case "j":
            var five= new Audio("sounds/kick-bass.mp3");
            five.play();
            break;
        case "k":
            var six= new Audio("sounds/crash.mp3");
            six.play();
            break;
        case "l":
            var seven= new Audio("sounds/snare.mp3");
            seven.play();
            break;
        
        default:
            console.log(button);

    
}
}


