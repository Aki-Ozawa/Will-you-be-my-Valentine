document.addEventListener("DOMContentLoaded", function() {

    var yesBtn = document.getElementById("yesBtn");
    var noBtn = document.getElementById("noBtn");
    var yesBtnText = document.querySelector("#yesBtn span");
    var valentineMessage = document.getElementById("valentineMessage");
    var valentineImage = document.getElementById("valentineImage");
    var newText = document.getElementById("newText");
    var newImage = document.getElementById("newImage");
    var originalTopMessage = valentineMessage.offsetTop;
    var originalTopImage = valentineImage.offsetTop;

    // Increase size and adjust position
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

        valentineMessage.style.transition = "top 0.3s ease";
        valentineImage.style.transition = "top 0.3s ease";

        valentineMessage.style.top = originalTopMessage - yesBtn.offsetHeight + "px";
        valentineImage.style.top = originalTopImage - yesBtn.offsetHeight + "px";
    });

    yesBtn.addEventListener("click", function() {
        // Hide the existing elements
        yesBtn.style.visibility = "hidden";
        noBtn.style.visibility = "hidden";
        valentineMessage.style.visibility = "hidden";
        valentineImage.style.visibility = "hidden";

        // Show new text and image after a delay
        setTimeout(function() {
            if (newText && newImage) {
                newText.style.visibility = "visible";
                newImage.style.visibility = "visible";
                // Adjust position if needed
                newText.style.top = "100px"; // Adjust top position as needed
                newImage.style.top = "200px"; // Adjust top position as needed
            }
        }, 300); // Delay to match the transition
    });

    // Initially hide new text and image
    if (newText && newImage) {
        newText.style.visibility = "hidden";
        newImage.style.visibility = "hidden";
    }
});
    