
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

// search-js
const Location = document.querySelector('.js-location')
const Results = document.querySelector('.js-Results')
const Location1 = document.querySelector('.js-container1')

document.getElementById("inputjs").onclick = function () {
    if (this.checked) {
        Location.classList.add('open1');
        Results.classList.add('open1');
        Location1.classList.add('open1')
    }
    else {
        Location.classList.remove('open1');
        Results.classList.remove('open1');
        Location1.classList.remove('open1')
    }
}

// <!-- javascrip tăng giảm giá -->

const slider1 = document.querySelector(".range");
const value = document.querySelector(".rangeValue");

value.textContent = slider1.value;
slider1.oninput = function () {
    value.textContent = this.value;
}

const x = document.querySelector(".js-container")
const x1 = document.querySelector(".js-container1")
const list = document.querySelector(".js-list")
const grid = document.querySelector(".js-grid")

function showLocation() {
    x.classList.add('open')
    x1.classList.add('open')
    grid.classList.add('open')
    list.classList.add('open')
}

function hideLocation() {
    x.classList.remove('open')
    x1.classList.remove('open')
    grid.classList.remove('open')
    list.classList.remove('open')

}

list.addEventListener('click', showLocation)
grid.addEventListener('click', hideLocation)