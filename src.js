window.addEventListener('scroll', function() {
    var myDiv = document.getElementById('banner');
    
    // Get the distance from the top of the page to the div
    var divOffset = myDiv.offsetTop;
    
    // Get the current scroll position
    var scrollPosition = window.scrollY || window.pageYOffset;
    
    // Change the background color if the div is not at the top
    if (scrollPosition > divOffset) {
      myDiv.style.backgroundColor = `rgba(29, 33, 38, 75%)`;
    } else {
      myDiv.style.backgroundColor = 'transparent';
    }
});