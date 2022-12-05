//nav bar toggle
const showNavbar = (toggleId, navId, bodyId, headerId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodyPadding = document.getElementById(bodyId),
    headerPadding = document.getElementById(headerId);

  if (toggle && nav && bodyPadding && headerPadding) {
    toggle.addEventListener("click", () => {
      //show nav bar
      nav.classList.toggle("show");
      //change icon
      toggle.classList.toggle("bx-x");
      //add padding
      bodyPadding.classList.toggle("body-pd");
      //add padding to header
      headerPadding.classList.toggle("body-pd");
    });
  }
};
showNavbar("header-toggle", "nav-bar", "bodyPadding", "header");

//active links

const linkColor = document.querySelectorAll(".nav__link");

function colorLink() {
  if (linkColor) {
    linkColor.forEach((l) => {
      l.classList.remove("active");
    });
    this.classList.add("active");
  }
}
linkColor.forEach((l) => {
  l.addEventListener("click", colorLink);
});
