document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") moveBlock("up");
  if (event.key === "ArrowDown") moveBlock("down");
  if (event.key === "ArrowLeft") moveBlock("left");
  if (event.key === "ArrowRight") moveBlock("right");
});