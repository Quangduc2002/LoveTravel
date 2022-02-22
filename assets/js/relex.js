// <!-- click vào icon hiện ra menu bên phải -->

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


    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('.icon__top').fadeIn();
            } else {
                $('.icon__top').fadeOut();

            }
        })
    });

    
