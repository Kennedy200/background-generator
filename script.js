const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const body = document.body;
const output = document.querySelector(".output");

function setGradient() {
    const gradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    body.style.background = gradient;
    output.textContent = `Background: ${gradient}`;
}

// Initial call to display the gradient on page load
setGradient();

// Add event listeners to change the background when colors are picked
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
