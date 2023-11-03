import React, { useEffect } from 'react';

function SmoothScrollingAnchorLinks() {
  useEffect(() => {
    const pageScrollLinks = document.querySelectorAll('a.page-scroll[href*="#"]:not([href="#"])');

    pageScrollLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
          const offset = target.offsetTop - 50;
          const duration = 1200;
          const easing = "easeInOutExpo";

          scrollToElement(target, offset, duration, easing);
        }
      });
    });

    function scrollToElement(element, to, duration, easing) {
      const start = window.scrollY;
      const change = to - start;
      let currentTime = 0;
      const increment = 20;

      function animateScroll() {
        currentTime += increment;
        const val = easeInOutExpo(currentTime, start, change, duration);
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
  }, []);

  return null; // This component doesn't render anything
}

export default SmoothScrollingAnchorLinks;
