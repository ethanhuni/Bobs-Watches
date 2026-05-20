
const inputField = document.getElementById("search");

inputField.addEventListener("keydown", function(event) {
    const content = event.target.value;

    if (event.key === "Enter") {
        window.location.href = `list.html?filter=${content}`;
    }
});
