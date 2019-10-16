window.onscroll = () => checkScroll();

var header = document.getElementById("header");

var stick = header.offsetTop;

function checkScroll() {
  if (window.pageYOffset > stick) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
