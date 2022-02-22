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

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.icon__top').fadeIn();
        } else {
            $('.icon__top').fadeOut();

        }
    })
});