let side_navbar = document.querySelector('.side_bar');
let overlay = document.querySelector('.body-overly');


// side mobile menu add script ......
let side_menu = document.querySelector('.side_navbar');
document.querySelector('#menu-bar').onclick = () =>{
    side_menu.classList.add('active');
    side_navbar.classList.add('active');
    overlay.classList.add('active');
    // cartmenu.classList.remove('active');
};


// preloader script

// $(window).on('load', function () {
//     $(".preloader").delay(500).fadeOut('slow');
//     $(".spinner").delay(500).fadeOut("slow");
//   });

// side menu  close  script .......... 
document.querySelector('.arrow').onclick = () =>{
    side_navbar.classList.remove('active');
    overlay.classList.remove('active');
    side_menu.classList.remove('active');
};
document.querySelector('.mobile_menu').onclick = () =>{
    side_navbar.classList.remove('active');
    overlay.classList.remove('active');
    side_menu.classList.remove('active');
}
overlay.onclick = () =>{
    side_navbar.classList.remove('active');
    overlay.classList.remove('active');
    side_menu.classList.remove('active');
}

//search from add script ............
// let searchfrm = document.querySelector('.search_frm');
// document.querySelector('#search-btn').onclick = () =>{
//     searchfrm.classList.add('active');
// }

//side menu search button close script................
// document.querySelector('#close_frm').onclick = () =>{
//     searchfrm.classList.remove('active');
// }

//scroll web page add header bg color.....
let header = document.querySelector('.header');
let back_top = document.querySelector('.backtop');

window.onscroll = () => {
    header.classList.remove('active');
    if(window.scrollY > 100){
        header.classList.add('active'); 
    }else{
        header.classList.remove('active');  
    }
    if(window.scrollY > 250){
        back_top.classList.add('active');
    }else{
        back_top.classList.remove('active');
    }
};

//home slider script.........

$('.slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    margin:0,
    nav:true,
    dots: false,
    navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>"
      ],
    responsive:{
        0:{
            items:1
        }
    }
});

// shop slider script............
$('.shop-slider').owlCarousel({
    // loop:true,
    margin:15,
    nav:true,
    dots: false,
    navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>"
      ],
    responsive:{
        0:{
            items:1
        },
        645:{
            items:2
        },
        768:{
            items:3
        },
        1024:{
            items:4
        }
    }
});

// reviews slider script......
$('.review-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        645:{
            items:2
        },
        768:{
            items:3
        },
        1024:{
            items:3
        }
    }
});

// blogs slider script.....
$('.blog_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        645:{
            items:2
        },
        768:{
            items:3
        },
        1024:{
            items:3
        }
    }
});

// client slider script...
$('.client_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        645:{
            items:2
        },
        768:{
            items:3
        },
        1024:{
            items:4
        }
    }
});

// nav menu link active script.............
// $(document).ready(function () {
//     $('.menu').on('click', 'li a', function () {
//       $(this).addClass('active').siblings().removeClass('active');
//     });
//     $('.mobile_menu').on('click', 'li a', function () {
//       $(this).addClass('active').siblings().removeClass('active');
//     });

//   });


// nav menu link active script.............
const activePage = location.href;
const navLink = document.querySelectorAll('.navbar .menu li a');
const navSubMenu = document.querySelectorAll('.mobile_menu li a');
const menuLength = navLink.length;
const submenuLength = navSubMenu.length;

let flagEnable =true;
for(let i = 0;i<menuLength;i++){
    if(navLink[i].href === activePage){
        navLink[i].className="active";
        flagEnable = false;
    }
}

if(flagEnable){
    var element = document.getElementById("products");
        element.classList.add("active");
}
for(let i = 0;i<submenuLength;i++){
    if(navSubMenu[i].href === activePage){
        navSubMenu[i].className="active";
        flagEnable = false;
    }  
}

// Animation function js........
new WOW().init();


