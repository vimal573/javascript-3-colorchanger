document.getElementById("button").addEventListener("click", function () {
  const randomInit = function () {
    return Math.floor(Math.random() * 255) + 1;
  };

  document.getElementById(
    "canvas"
  ).style.backgroundColor = `rgb(${randomInit()},${randomInit()},${randomInit()})`;
});
