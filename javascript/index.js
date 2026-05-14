
const inputField = document.getElementById("search");

inputField.addEventListener("keydown", function(event) {
    const content = event.target.value;

    if (event.key === "Enter") {
        event.preventDefault();
        console.log("Value:", content);
    }
});
