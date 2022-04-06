const navBar = document.querySelector(".navul");

navBar.addEventListener("click", (e) => {
  var arr = Array.from(navBar.children);
  for (let li of arr) {
    if (li.classList.contains("active")) {
      li.classList.remove("active");
    }
  }
  e.target.parentElement.classList.add("active");
});
