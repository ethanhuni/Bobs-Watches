let imgIndex = 0;
let productID = 0;

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
    loadData()
}

function loadData() {
    const info = document.getElementById("info-header");
    info.querySelector("h1").innerHTML = productTitle(productID);
    document.getElementById("brand").innerHTML = productBrand(productID).toUpperCase();
    document.getElementById("price").innerHTML = productPrice(productID) + " AUD";
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

function buy() {
    if (!basket.includes(productID)) {
        addCart(productID);
    }
    window.location.href = `basket.html`;
}