document.addEventListener("DOMContentLoaded", function() {

    var yesBtn = document.getElementById("yesBtn");
    var noBtn = document.getElementById("noBtn");
    var yesBtnText = document.querySelector("#yesBtn span");
    var valentineMessage = document.getElementById("valentineMessage");
    var valentineImage = document.getElementById("valentineImage");
    var newText = document.getElementById("newText");
    var newImage = docuemnt.getElementById("newImage");
    var originalTopMessage = valentineMessage.offsetTop;
    var originalTopImage = valentineImage.offsetTop;

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

    })

    
});