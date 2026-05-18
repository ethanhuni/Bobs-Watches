
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

}