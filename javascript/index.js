
const inputField = document.getElementById("search");
const x = document.getElementById("x");

inputField.addEventListener("keydown", function(event) {
    const content = event.target.value;

    if (event.key === "Enter") {
        window.location.href = `list.html?filter=${content}`;
    }
});

x.addEventListener("click", function(event) {
    inputField.value = "";
})
