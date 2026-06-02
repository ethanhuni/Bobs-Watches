
const search = document.getElementById('search');

window.onload = function () {
    const urlParam = new URLSearchParams(window.location.search);
    loadWatches()
    fillSearch(urlParam.get("filter"));
}

function fillSearch(value) {
    search.value = value;
    applySearch();
    return false;
}

function loadWatches() {
    const products = document.getElementsByClassName('product');
    for (const product of products) {
        let id = product.id;
        product.querySelector("h1").innerHTML = productTitle(id);
        product.querySelector("h2").innerHTML = productBrand(id);
        product.querySelector("h3").innerHTML = productPrice(id);
        product.querySelector("img").src = productImg(id, "front");
    }
}

function applySearch() {
    const products = document.getElementsByClassName('product');
    const filter = search.value.toUpperCase();
    for (const product of products) {
        let id = product.id;
        // Check each of the search types
        let titleCk = (productTitle(id).toUpperCase().indexOf(filter) > -1);
        let brandCk = (productBrand(id).toUpperCase().indexOf(filter) > -1);
        if (titleCk || brandCk) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    }
}