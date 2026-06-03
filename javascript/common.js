
const SCROLL_FADE = 300;

const products = [
    {
        "title" : "Steel Submariner",
        "brand" : "Rolex",
        "price" : "$15,795",
        "image" : "submariner",
        "source" : "https://www.bobswatches.com/used-steel-rolex-submariner-ref-124060-black-no-date-dial.html"
    },
    {
        "title" : "GMT-Master II Pepsi",
        "brand" : "Rolex",
        "price" : "$25,295",
        "image" : "pepsi",
        "source" : "https://www.bobswatches.com/used-rolex-gmt-master-ii-pepsi-ref-126710blro-jubilee-band.html"
    },
    {
        "title" : "Burgundy Speedmaster '57",
        "brand" : "Omega",
        "price" : "$7,595",
        "image" : "speed",
        "source" : "https://www.bobswatches.com/omega/pre-owned-burgundy-dial-omega-speedmaster-57.html"
    },
    {
        "title" : "Calibre de Cartier",
        "brand" : "Cartier",
        "price" : "$32,495",
        "image" : "calibre",
        "source" : "https://www.bobswatches.com/cartier/pre-owned-cartier-calibre-de-cartier-w7100040-18k-rose-gold.html"
    },
    {
        "title" : "Black Bay GMT",
        "brand" : "Tutor",
        "price" : "$5,295",
        "image" : "bay",
        "source" : "https://www.bobswatches.com/tudor/pre-owned-tudor-black-bay-gmt-black-dial-ref-79833.html"
    }
]

const basket = []

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > SCROLL_FADE) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})

function gotoList(value="") {
    window.location.href = `list.html?filter=${value}`;
}

function gotoProduct(id) {
    window.location.href = `product.html?filter=${id}`;
}

function productTitle(id) {
    return products[id]["title"];
}

function productBrand(id) {
    return products[id]["brand"];
}

function productPrice(id) {
    return products[id]["price"];
}

function productImg(id, angle) {
    const temp = products[id]["image"];
    return `src/Watch-Images/${temp}-${angle}.avif`;
}

function addCart(id) {
    basket.push(id);
    alert(id)
}