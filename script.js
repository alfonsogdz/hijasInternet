$(document).ready(function() {
  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#navbar',
    offset: 80
  });

  // Function to collapse Navbar
  var navbarCollapse = function() {
    if ($("#navbar").offset().top > 100) {
      $("#navbar").addClass("navbar-shrink");
    } else {
      $("#navbar").removeClass("navbar-shrink");
    }
  };

  // Collapse now if the page is not at the top
  navbarCollapse();

  // Collapse the navbar when the page is scrolled
  $(window).scroll(navbarCollapse);

  // Hover effect for images
  $(".img-hover-effect").hover(
    function() {
      var imgElem = $(this); // Use variable to store the image element
      var hoverImage = imgElem.attr("data-src");
      imgElem.attr("data-src", imgElem.attr("src"));
      imgElem.attr("src", hoverImage);
      imgElem.css("background-image", "url(" + imgElem.attr("src") + ")");
    },
    function() {
      var imgElem = $(this); // Use variable to store the image element
      var originalImage = imgElem.attr("data-src");
      imgElem.attr("data-src", imgElem.attr("src"));
      imgElem.attr("src", originalImage);
      imgElem.css("background-image", "url(" + imgElem.attr("src") + ")");
    }
  );
});