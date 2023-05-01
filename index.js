const button = document.querySelector("button");
const display = document.querySelector("span");

button.addEventListener('click', () => {
    alert("Btn clicked");
    display.textContent = "Hey";
})