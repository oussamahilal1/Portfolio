$("#slider").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
        items:1,
        nav: false
        },
        600:{
        items:2,
        nav: false
        },
        1000:{
        items:3,
        nav: false
        }
    }
    });
    var icon = document.getElementById("icon");

    icon.onclick = function(){
        document.body.classList.toggle("dark-mode");
        if(document.body.classList.contains("dark-mode")){
            icon.src = "./img/sun.png";
        }else{
            icon.src = "./img/moon.png";
        }

    }
    var typed = new Typed('.type', {
    strings: [' web devloper'],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true,
    });
    new WOW().init();
    AOS.init();

