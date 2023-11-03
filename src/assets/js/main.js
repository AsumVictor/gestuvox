document.addEventListener("DOMContentLoaded", function() {
    "use strict";

    //===== Preloader
    window.addEventListener('load', function() {
        setTimeout(function() {
            var preloader = document.querySelector('.preloader');
            preloader?.style?.transition = "opacity 0.5s";
            preloader?.style?.opacity = "0";
            setTimeout(function() {
                preloader.style.display = "none";
            }, 500);
        }, 500);
    });

    //===== Sticky
    window.addEventListener('scroll', function() {
        var scroll = window.scrollY;
        var headerNavbar = document.querySelector('.header_navbar');
        if (scroll < 20) {
            headerNavbar.classList.remove('sticky');
        } else {
            headerNavbar.classList.add('sticky');
        }
    });

    //===== Section Menu Active
    var scrollLinks = document.querySelectorAll('.page-scroll');

    window.addEventListener('scroll', function() {
        var scrollbarLocation = window.scrollY;

        scrollLinks.forEach(function(scrollLink) {
            var hash = scrollLink.hash;
            var section = document.querySelector(hash);
            var sectionOffset = section.offsetTop - 73;

            if (sectionOffset <= scrollbarLocation) {
                scrollLink.parentElement.classList.add('active');
                Array.from(scrollLink.parentElement.parentElement.children).forEach(function(sibling) {
                    if (sibling !== scrollLink.parentElement) {
                        sibling.classList.remove('active');
                    }
                });
            }
        });
    });

    //===== Close navbar-collapse when clicked
    var navbarNavLinks = document.querySelectorAll(".navbar-nav a");

    navbarNavLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            document.querySelector(".navbar-collapse").classList.remove("show");
        });
    });

    var navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.addEventListener('click', function() {
        this.classList.toggle("active");
    });

    navbarNavLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            navbarToggler.classList.remove('active');
        });
    });

    //===== Back to top
    window.addEventListener('scroll', function() {
        var backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 600) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    var backToTopButton = document.querySelector('.back-to-top');
    backToTopButton.addEventListener('click', function(event) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
