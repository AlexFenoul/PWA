


window.onload = function() {
    var showImage = document.getElementById("showImage");
    var hideImage = document.getElementById("hideImage");

    showImage.onclick = function() {
        document.getElementById("carousel").style.display = "flex";
        showImage.style.display = "none";
        hideImage.style.display = "flex";
        return false;
    }

    hideImage.onclick = function() {
        document.getElementById("carousel").style.display = "none";
        showImage.style.display = "flex";
        hideImage.style.display = "none";
        return false;
    }
}