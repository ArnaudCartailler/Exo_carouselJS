
var slideIndex = [1,1];
var slideId = ["slides"];

function showSlides(n, no) {

  var i;
  var x = document.getElementsByClassName(slideId[no]);

  if (n > x.length) {
    slideIndex[no] = 1
  }
  if (n < 1) {
    slideIndex[no] = x.length
  }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }

  x[slideIndex[no]-1].style.display = "block";

}

var myIndex = 0;
carousel();

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1
    }
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2500);
}
