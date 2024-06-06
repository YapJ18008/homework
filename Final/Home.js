const bodyElement = document.body;
window.addEventListener("scroll", function (auto) {
  const scrollTop = window.scrollY; // Vertical scroll position
  console.log(scrollTop);

  if (scrollTop > 49) {
    bodyElement.classList.add("header-auto");
  } else {
    bodyElement.classList.remove("header-auto");
  }
});