const button = document.querySelector("button");
const display = document.querySelector("span");

button.addEventListener('click', () => {
    display.textContent = "Hey";
})