

window.onload = function () {
    for (let i = 0; i < CART_LIMIT; i++) {
        if (basket.length <= i) {
            hide(i);
        } else {
            let li = document.getElementById("b"+i);
            loadListing(basket[i], li)
        }
    }
}

function loadListing(id, li) {
    li.querySelector("img").src = productImg(id, "front")
    li.querySelector(".title").innerHTML = productTitle(id);
    li.querySelector(".brand").innerHTML = productBrand(id);
    li.querySelector(".year").innerHTML = productYear(id);
    li.querySelector(".price").innerHTML = productPrice(id);
}

function hide(idx) {
    let li = document.getElementById("b"+idx);
    li.style.display = "none";
}

function remove(idx) {
    removeCart(idx);
    hide(idx);
}