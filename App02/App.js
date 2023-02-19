const container = document.querySelector(".container");
const body = document.querySelector("body");
const colors = ["red", "blue", "green", "yellow", "orange"];

body.style.backgroundColor = "blue";
container.addEventListener("click", BGchange);

function BGchange() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
