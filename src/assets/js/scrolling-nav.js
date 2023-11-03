document.addEventListener("DOMContentLoaded", function() {
    var pageScrollLinks = document.querySelectorAll('a.page-scroll[href*="#"]:not([href="#"])');

    pageScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var target = document.getElementById(targetId);

            if (target) {
                var offset = target.offsetTop - 50;
                var duration = 1200;
                var easing = "easeInOutExpo";

                scrollToElement(target, offset, duration, easing);
            }
        });
    });

    function scrollToElement(element, to, duration, easing) {
        var start = window.scrollY;
        var change = to - start;
        var currentTime = 0;
        var increment = 20;

        function animateScroll() {
            currentTime += increment;
            var val = easeInOutExpo(currentTime, start, change, duration);
            window.scrollTo(0, val);
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        animateScroll();
    }

    function easeInOutExpo(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
        t--;
        return (c / 2) * (-Math.pow(2, -10 * t) + 2) + b;
    }
});
