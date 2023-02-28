// Selecting all img elements and setting the false attribute to the value of the dragable attribute.
let images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  images[i].setAttribute("draggable", false);
}
