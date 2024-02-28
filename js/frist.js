var images = Array.from(document.getElementsByTagName("img"));
var item = document.querySelector(".item-layer");
var itemImg = document.querySelector(".item-layer-img");
var closeIcon = document.querySelector("#close");
var nextIcon = document.querySelector("#right");
var prevIcon = document.querySelector("#left");
var currentIndex = 0;
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function (e) {
        currentIndex = images.indexOf(e.target)

        item.style.cssText = " display: block;";
        var imagesrc = e.target.src;

        itemImg.style.backgroundImage = `url(${imagesrc})`;
    })
}


closeIcon.addEventListener("click", hideSlider)
function hideSlider() {
    item.style.cssText = " display:none;";
}


nextIcon.addEventListener("click", nextSlide)
function nextSlide() {
    currentIndex++
    if (currentIndex == images.length) {
        currentIndex = 0;
    }
    var imagsrc = images[currentIndex].src;

    itemImg.style.backgroundImage = `url(${imagsrc})`
}


prevIcon.addEventListener("click", prevSlide)
function prevSlide() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = (images.length) - 1;

    }
    var imagsrc = images[currentIndex].src;

    itemImg.style.backgroundImage = `url(${imagsrc})`

}

document.addEventListener("keyup", function (e) {

    if (e.key == "ArrowRight") {
        nextSlide()
    }

    else if (e.key == "ArrowLeft") {
        prevSlide()
    }


    else if (e.key == "Backspace") {
        hideSlider()
    }



})