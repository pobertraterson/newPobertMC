window.addEventListener('scroll', function() {
    var myDiv = document.getElementById('banner');
    var divOffset = myDiv.offsetTop;
    var scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > divOffset) {
      myDiv.style.backgroundColor = `rgba(29, 33, 38, 75%)`;
    } else {
      myDiv.style.backgroundColor = 'transparent';
    }
});

function unavailable() {
    alert("Sorry, this feature is currently unavailable.");
}

//thanks w3schools.com
function openNavPanel() {
  document.getElementById('sidenav').style.width = "300px";
}
function closeNavPanel() {
  document.getElementById('sidenav').style.width = "0";
}
