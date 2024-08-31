document.addEventListener("DOMContentLoaded", function() {

    var yesBtn = document.getElementById("yesBtn");
    var noBtn = document.getElementById("noBtn");
    var yesBtnText = document.querySelector("#yesBtn span");
    var valentineMessage = document.getElementById("valentineMessage");
    var valentineImage = document.getElementById("valentineImage");
    var newText = document.getElementById("newText");
    var newImage = document.getElementById("newImage");

    noBtn.addEventListener("click", function() {
        var currentWidth = yesBtn.offsetWidth;
        var currentHeight = yesBtn.offsetHeight;

        var newWidth = currentWidth * 1.1;
        var newHeight = currentHeight * 1.1;
        yesBtn.style.width = newWidth + "px";
        yesBtn.style.height = newHeight + "px";

        var currentFontSize = parseInt(window.getComputedStyle(yesBtnText).fontSize);
        var newFontSize = currentFontSize + 1;
        yesBtnText.style.fontSize = newFontSize + "px";
    });

    yesBtn.addEventListener("click", function() {
        yesBtn.style.visibility = "hidden";
        noBtn.style.visibility = "hidden";
        valentineMessage.style.visibility = "hidden";
        valentineImage.style.visibility = "hidden";

        setTimeout(function() {
            newText.style.visibility = "visible";
            newImage.style.visibility = "visible";
        }, 300);
    });

});
    
    