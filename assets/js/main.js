function menu(){
    document.getElementById("menu1").style.right = "0px";
}

function closes(){
    document.getElementById("menu1").style.right = "-100%";
}

function menu1(){
    document.getElementById("menu2").style.right = "0px";
}

function closes1(){
    document.getElementById("menu2").style.right = "-100%";
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
