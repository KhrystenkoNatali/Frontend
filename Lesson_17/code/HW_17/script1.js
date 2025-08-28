const block = document.getElementById("block");
const container = document.querySelector(".container");

let step = 10;
let topPos = 0;
let leftPos = 0;

const limitRight = container.clientWidth - block.clientWidth;
const limitBottom = container.clientHeight - block.clientHeight;

function moveBlock(direction) {
  if (direction === "up" && topPos > 0) topPos -= step;
  if (direction === "down" && topPos < limitBottom) topPos += step;
  if (direction === "left" && leftPos > 0) leftPos -= step;
  if (direction === "right" && leftPos < limitRight) leftPos += step;

  block.style.top = topPos + "px";
  block.style.left = leftPos + "px";
}

document.getElementById("up").addEventListener("click", () => moveBlock("up"));
document.getElementById("down").addEventListener("click", () => moveBlock("down"));
document.getElementById("left").addEventListener("click", () => moveBlock("left"));
document.getElementById("right").addEventListener("click", () => moveBlock("right"));