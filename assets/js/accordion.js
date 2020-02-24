$(document).ready(function() {
    

  });


/* Accordion panel to show and hide information in the information section */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/*Page scrolls down if arrow in header is clicked */

$(".arrowlogo").click(function() {
    $("html, body").animate({scrollTop: $(".intro-title").offset().top}, 2000);
});