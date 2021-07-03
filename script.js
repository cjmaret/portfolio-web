const header = document.querySelector(".header");

const logoWhite = document.querySelector(".logo-link_type_white");

const logoBlack = document.querySelector(".logo-link_type_black");

const navLinks = document.querySelectorAll(".header__link");

const menu = document.querySelector(".menu");

const checkbox = document.querySelector(".header__menu-btn");



window.addEventListener("scroll", function () {
    if (window.pageYOffset >= (window.innerHeight * 0.8)) {
        header.classList.add("header_scroll");
        header.classList.remove("header_grey");
        // logoWhite.style.display = "block";
        // logoBlack.style.display = "none";
        // navLinks.forEach(link => link.style.color = "white");
    } else {
        header.classList.add("header_grey");
        header.classList.remove("header_scroll");
        // logoWhite.style.display = "none";
        // logoBlack.style.display = "block";
        // navLinks.forEach(link => link.style.color = "black");
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        checkbox.checked = false;
    });
});



$(window).load(function() {
      // Animate loader off screen
      $(".se-pre-con").delay(2000).fadeOut("slow");
  });