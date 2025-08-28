const cover = document.getElementById("cover");
const btn = document.getElementById("startBtn");

btn.addEventListener("click", () => {
  let currentTop = 0;

  const timer = setInterval(() => {
    currentTop += 5;
    cover.style.top = currentTop + "px";

    if (currentTop >= 120) {
      clearInterval(timer);
    }
  }, 50);
});