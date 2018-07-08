'use strict';

//obsługa scrolla

function scrollWindow() {
    'use strict';
    if ($(window).scrollTop() > 20) {
        $("html, body").addClass("scroll-move")
    } else {
        $("html, body").removeClass("scroll-move")
    } 
}

$(window).on("scroll", scrollWindow);


//obsługa przejścia

const links =$("a:not([href='#'])");
const body = $("body");
const scrollTime = 500;

$(links).on("click", function(e){
    e.preventDefault();
    console.log(this.hash);
    $("html, body").animate({
        scrollTop: $(this.hash).offset().top - 50
    }, scrollTime)
});

//przejście do services ze strony głównej

$(".main-btn").click(function(e){
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $("#services").offset().top - 50
    }, 400)
})

