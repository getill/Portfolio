let mousemove1 = document.querySelector(".mouseMove1");
let mousemove2 = document.querySelector(".mouseMove2");
let mousemove3 = document.querySelector(".mouseMove3");
const mouses = document.querySelectorAll(".mouse");

//-----------------Mouse tracking-----------------------
window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
  });
});
