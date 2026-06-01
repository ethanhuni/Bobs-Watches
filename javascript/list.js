
const search = document.getElementById('search');

window.onload = function () {
    const urlParam = new URLSearchParams(window.location.search);
    fillSearch(urlParam.get("filter"));
}

function fillSearch(value) {
    search.value = value;
    applySearch();
    return false;
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