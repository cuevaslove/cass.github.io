(function() {
    var script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js";
    script.onload = function() {
        initSlider();
        initNavbar();
    };
    document.head.appendChild(script);
})();

function initSlider() {
    var imgs = document.querySelectorAll('.motiv');
    var next = 4.2; // Stay on image for 4 seconds + transition time
    var currentSlide = 0;

    function crossfade() {
        imgs[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % imgs.length;
        imgs[currentSlide].classList.add('active');
        setTimeout(crossfade, next * 1000);
    }

    setTimeout(crossfade, next * 1000);
}

function initNavbar() {
    var navbar = document.getElementById('navbar');
    var body = document.body;

    function checkScrollOrResize() {
        if (window.scrollY > 50 || window.innerWidth < 768) {
            navbar.classList.add('shrink');
            body.classList.add('blue-bg'); // Add the class to change background color
        } else {
            navbar.classList.remove('shrink');
            body.classList.remove('blue-bg'); // Remove the class to revert background color
        }
    }

    window.addEventListener('scroll', checkScrollOrResize);
    window.addEventListener('resize', checkScrollOrResize);

    // Initial check
    checkScrollOrResize();
}
