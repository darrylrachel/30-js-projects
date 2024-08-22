const buttonEl = document.querySelector(".btn");

buttonEl.addEventListener("mouseover", (evt) => {
  const x = evt.pageX - buttonEl.offsetLeft;
  const y = evt.pageY - buttonEl.offsetTop;

  buttonEl.style.setProperty("--xPos", x + "px");
  buttonEl.style.setProperty("--yPos", y + "px");
});