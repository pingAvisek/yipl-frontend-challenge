// Selecting all img elements and setting the false attribute to the value of the dragable attribute.
let images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  images[i].setAttribute("draggable", false);
}

let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");
let navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("menu-open");
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.toggle("menu-open");
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
});
