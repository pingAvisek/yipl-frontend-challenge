// Selecting all img elements and setting the false attribute to the value of the dragable attribute.
var images = document.querySelectorAll("img");
for (var i = 0; i < images.length; i++) {
  images[i].setAttribute("draggable", false);
}
