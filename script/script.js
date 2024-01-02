// Navbar Toggle //
const toggleButton = document.getElementById("toggleButton");
const iconToggle = document.getElementById("iconToggle");

toggleButton.addEventListener("click", function () {
  if (iconToggle.classList.contains("navbar-toggler-icon")) {
    // Ganti ke ikon close
    iconToggle.classList.remove("navbar-toggler-icon");
    iconToggle.innerHTML =
      '<img src="assets/navbar/Close-Square.png" alt="Close Icon" class="close-icon">';
  } else {
    // Ganti kembali ke ikon semula
    iconToggle.classList.add("navbar-toggler-icon");
    iconToggle.innerHTML = '<img src="assets/navbar/Category.png" alt="Close Icon" class="close-icon">';
  }
});

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

// artikel button function //
var buttons = document.querySelectorAll(".btn-grup button");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    var links = document.querySelectorAll(".btn-grup a");

    links.forEach(function (link) {
      link.classList.remove("active");
    });

    var targetLink = this.parentElement;
    targetLink.classList.add("active");
  });
});

function toggle() {
  var fotoElements = document.querySelectorAll(".foto");
  var videoElements = document.querySelectorAll(".video");
  var artikelButton = document.querySelector(".btn-grup .active");

  if (artikelButton.innerText.toLowerCase() === "foto") {
    fotoElements.forEach(function (foto) {
      foto.style.display = "flex";
    });
  } else {
    fotoElements.forEach(function (foto) {
      foto.style.display = "none";
    });
  }

  if (artikelButton.innerText.toLowerCase() === "video") {
    videoElements.forEach(function (video) {
      video.style.display = "flex";
    });
  } else {
    videoElements.forEach(function (video) {
      video.style.display = "none";
    });
  }
}
