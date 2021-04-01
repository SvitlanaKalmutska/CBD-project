var acc = document.getElementsByClassName("accordion__btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var accordion__content = this.nextElementSibling;
    if (accordion__content.style.maxHeight) {
      accordion__content.style.maxHeight = null;
    } else {
      accordion__content.style.maxHeight =
        accordion__content.scrollHeight + "px";
    }
  });
}
