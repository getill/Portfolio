let mousemove1 = document.querySelector(".mouseMove1");
let mousemove2 = document.querySelector(".mouseMove2");
let mousemove3 = document.querySelector(".mouseMove3");
const mouses = document.querySelectorAll(".mouse");

// Get all buttons with class="btn" inside the container
var items = document.querySelectorAll(".btn");

//-----------------Mouse tracking-----------------------
window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
  });
});

//-----------------Hover Event-----------------------

items.forEach((item, idx) => {
  item.addEventListener("click", () => {
    ToggleActive(item, idx);
  });
});

function ToggleActive(el, index) {
  el.classList.toggle("active");
  items.forEach((item, idx) => {
    if (idx !== index) {
      item.classList.remove("active");
    }
  });
}

//-----------------On Scroll Hover Event-----------------------

const navLi = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 65) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    document
      .querySelector("nav ul li a[href*= " + current + "]")
      .classList.add("active");
  });
});
