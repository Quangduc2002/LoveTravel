
function menu1(){
    document.getElementById("menu2").style.right = "0px";
}

function closes1(){
    document.getElementById("menu2").style.right = "-400px";
}


$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,  /*hết ảnh thì quay lại */   
        arrows: false,   /*mất nút chuyển ảnh */
        fade: true,
        cssEase: 'linear',
        draggable:false,
        slidesToShow: 1,   /*hiện ảnh */
        autoplay: true,     /*điều kiện để tự động chạy */
        autoplaySpeed: 3000,    /* time chạy 2s*/
        
    });
});

// click vào icon hiện ra menu bên phải

const bars = document.querySelector('.js-bars')
const modal = document.querySelector('.js-options')
const modalClose = document.querySelector('.js-close')

function showMenu() {
    modal.classList.add('open');
}

function hideMenu() {
    modal.classList.remove('open');
}

bars.addEventListener('click', showMenu)
modalClose.addEventListener('click', hideMenu)

// icon top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.icon__top').fadeIn();
        } else {
            $('.icon__top').fadeOut();

        }
    })
});