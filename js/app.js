window.onload = function() {
    var showImage = document.getElementById("showImage");
    var hideImage = document.getElementById("hideImage");

    showImage.onclick = function() {
        document.getElementById("carousel").style.display = "block";
        showImage.style.display = "none";
        hideImage.style.display = "block";
        return false;
    }

    hideImage.onclick = function() {
        document.getElementById("carousel").style.display = "none";
        showImage.style.display = "block";
        hideImage.style.display = "none";
        return false;
    }
}