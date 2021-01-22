var drumButtons = document.querySelectorAll(".drum");

for(var i = 0; i < drumButtons.length; i++){
    drumButtons[i].addEventListener("click" , function() {
        alert("Clicked!");
    });
}


