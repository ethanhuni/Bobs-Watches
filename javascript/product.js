
var imgIndex = 0;
var productID = 0;

const images = {
    0 : "front",
    1 : "side",
    2 : "back",
    3 : "box",
}

window.onload = function () {
    const urlParam = new URLSearchParams(window.location.search);
    productID = parseInt(urlParam.get("filter"))
    setImg()
}

function imgScroll(forward) {
    if (forward) {
        imgIndex = (imgIndex + 1) % 4;
    } else {
        imgIndex = (imgIndex + 3) % 4;
    }
    setImg();
}

function setImg() {
    const img = document.getElementById("img");
    img.src = productImg(productID, images[imgIndex]);
}