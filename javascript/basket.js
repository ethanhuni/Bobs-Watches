
const code = document.getElementById("code");

const VAT = 0.1;
const SHIPPING_COST = 70;

const CODE_MSG_GOOD = "Discount Code Applied!"
const CODE_MSG_BAD = "Invalid Discount Code?"

let real_discount = 0;

const COUPONS = {
    "half" : 0.5,
    "20" : 0.2
}

window.onload = function () {
    for (let i = 0; i < CART_LIMIT; i++) {
        if (basket.length <= i) {
            hide(i);
        } else {
            let li = document.getElementById("b"+i);
            loadListing(basket[i], li)
        }
    }
    calculateTotal()
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
    window.location.reload();
}

function calculateTotal() {
    let subTotal = 0;
    let shipping = SHIPPING_COST;
    let tax = 0;
    let total = 0;

    let percent = "";
    let code_msg = "";
    let discount = 0;


    for (let i = 0; i < basket.length; i++) {
        subTotal += productRealPrice(basket[i]);
    }
    tax = Math.floor(subTotal * VAT);

    if (subTotal > 10000) {
        shipping = 0;
    }

    if (code.value in COUPONS) {
        real_discount = COUPONS[code.value]
        code_msg = CODE_MSG_GOOD;
    } else if (code.value !== "") {
        code_msg = CODE_MSG_BAD;
    }

    discount = Math.floor(real_discount * subTotal);
    percent = real_discount*100 + "%";


    total = subTotal + shipping - discount;

    document.getElementById("subtotal").innerHTML = format(subTotal);
    document.getElementById("shipping").innerHTML = format(shipping);
    document.getElementById("tax").innerHTML = format(tax);
    document.getElementById("total").innerHTML = format(total);

    document.getElementById("discount").innerHTML = format(discount);
    document.getElementById("percent").innerHTML = percent;
    document.getElementById("msg").innerHTML = code_msg;
}

function format(n) {
    return "$" + n.toLocaleString() + " AUD";
}