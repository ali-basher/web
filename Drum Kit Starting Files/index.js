// Detecting Button Press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Detecting Keyboard Press

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    function audio(nameAudio) {
        var audio = new Audio("sounds/" + nameAudio + ".mp3");
        audio.play();
    }


    switch (key) {
        case "w":
            audio("tom-1");
            break;

        case "a":
            audio("tom-2");
            break;

        case "s":
            audio("tom-3");
            break;

        case "d":
            audio("tom-4");
            break;

        case "j":
            audio("snare");
            break;

        case "k":
            audio("crash");
            break;

        case "l":
            audio("kick-bass");
            break;

        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);
}