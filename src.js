function darklight() {
    var element = document.body;
    element.classList.toggle("light-mode");
}
function bannermode() {
    var element = document.getElementById("banner-1");
    if (backgroundColor == "#0D1721") {
    element.style.backgroundColor = "#586D81";
    } else {
        element.style.backgroundColor = "#0D1721";
    }
}
function shownhide() {
    var x = document.getElementById("lupdate");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }