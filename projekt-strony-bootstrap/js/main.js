'use strict';

//const links =$("a:not([href='#'])");
//const body = $("body");
//const scrollTime = 600;

function scrollWindow() {
    'use strict';
    if ($(window).scrollTop() > 20) {
        $("html, body").addClass("scroll-move")
    } else {
        $("html, body").removeClass("scroll-move")
    } 
}

$(window).on("scroll", scrollWindow);