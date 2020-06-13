/*=============================================
ANIMACIONES CON EL SCROLL
=============================================*/

var alturaHero = $(".hero").height();

$(window).scroll(function () {

    var posY = window.pageYOffset;

    if (posY > 55) {

        $("header").css({ "background": "#828282", "transition": ".5s all" });

    } else {

        $("header").css({ "background": "rgba(0, 0, 0, 0)" });

    }

});

$(".verMas").click(function(){
    
    var vinculo = $(this).attr("vinculo");

    $("html, body").animate({

        scrollTop: $(vinculo).offset().top - 60

    }, 1000, "easeInOutBack");

});

/*===================
MENÚ HAMBURGUESA
===================*/

$(".fa-bars").click(function () {

    $(".menu").animate({width: 'toggle'});

});
  
$(".btnClose").click(function () {
  
    $(".menu").animate({width: 'toggle'});
    $(".menuMovil").hide("fast");
  
});


/*=============================================
SCROLL UP
=============================================*/

$.scrollUp({
    scrollText: "",
    scrollSpeed: 2000,
    easingType: "easeOutQuint"
});

/*=============================================
DESPLAZAMIENTO MENÚ
=============================================*/

$(".menu ul li a").click(function(e){

    $(".menu").slideToggle('fast');

    e.preventDefault();

    var vinculo = $(this).attr("href");

    $("html, body").animate({

        scrollTop: $(vinculo).offset().top - 60

    }, 2000, "easeOutQuint")

})

$(".botonera ul li a").click(function(e){

    e.preventDefault();

    var vinculo = $(this).attr("href");

    $("html, body").animate({

        scrollTop: $(vinculo).offset().top - 60

    }, 2000, "easeOutQuint")

})

/*=============================================
 GRID
=============================================*/

