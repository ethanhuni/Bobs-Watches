
const code = document.getElementById("code");
const items = document.getElementById("items");
const order = document.getElementById("order");
const title = document.getElementById("title");
const quantity = document.getElementById("quantity");
const sub = document.getElementById("sub");

const button = document.getElementById("buy");



const VAT = 0.1;
const SHIPPING_COST = 70;

const CODE_MSG_GOOD = "Discount Code Applied!"
const CODE_MSG_BAD = "Invalid Discount Code?"

const TITLE_1 = "Shopping Basket"
const TITLE_2 = "Checkout"

let real_discount = 0;
let stage = 0;

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
    proceed()
    calculateTotal()
    quantity.innerText = "" + basket.length;
    sub.innerHTML = format(CalcSubTotal());
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

function CalcSubTotal() {
    let subTotal = 0;
    for (let i = 0; i < basket.length; i++) {
        subTotal += productRealPrice(basket[i]);
    }
    return subTotal;
}

function calculateTotal() {
    let subTotal = 0
    let shipping = SHIPPING_COST;
    let tax = 0;
    let total = 0;

    let percent = "";
    let code_msg = "";
    let discount = 0;

    subTotal = CalcSubTotal();

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
    if (real_discount === 0) {
        percent = "";
    }
    if (subTotal <= 0) {
        shipping = 0;
    }


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


function checkFields() {
    const n = document.getElementById("name").value.length > 0;
    const e = document.getElementById("email").value.length > 0;
    const p = document.getElementById("phone").value.length > 0;
    const a = document.getElementById("address").value.length > 0;
    const c = document.getElementById("card").value.length > 0
    const x = document.getElementById("expire").value.length > 0;
    const v = document.getElementById("cvv").value.length > 0;


    button.disabled = !(n && e && p && a && c && x && v)

}


function proceed() {
    stage ++;
    switch (stage) {
        case 1:
            order.style.display = "none";
            items.style.display = "block";
            title.innerText = TITLE_1;
            button.disabled = (basket.length === 0);
            break;
        case 2:
            order.style.display = "block";
            items.style.display = "none";
            title.innerText = TITLE_2;
            button.disabled = true;
            button.innerText = "PURCHASE"
            break;
        case 3:
            alert("Purchase!")
    }
}