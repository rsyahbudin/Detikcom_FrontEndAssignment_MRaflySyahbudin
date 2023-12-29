// image carousel function //
document.addEventListener("DOMContentLoaded", function () {
  var carouselInstance = document.getElementById("carouselExample");
  var carousel = new bootstrap.Carousel(carouselInstance);
  var imgActiveItems = document.querySelectorAll(".img-active div");

  carouselInstance.addEventListener("slid.bs.carousel", function (event) {
    var activeSlideIndex = event.to;

    imgActiveItems.forEach(function (item) {
      item.classList.remove("active");
    });

    imgActiveItems[activeSlideIndex].classList.add("active");
  });

  imgActiveItems.forEach(function (img, index) {
    img.addEventListener("click", function () {
      carousel.to(index);

      imgActiveItems.forEach(function (item) {
        item.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});
