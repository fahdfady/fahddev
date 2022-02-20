// loader
let body = document.querySelector('body');

window.addEventListener('load', function () {
    setTimeout(function () { body.classList.add("loaded") }, 5000);
});


// cursor
let mouseCursor = document.querySelector('.cursor');
let mouseDot = document.querySelector('.dot');
let smallSpeed = 0.2;
let largeSpeed = 0.12;


window.addEventListener('mousemove', moveCursor);


function moveCursor(e) {
    let placeX = e.pageX - 25;
    let placeY = e.pageY - 25;
    let placeXS = e.pageX - 4;
    let placeYS = e.pageY - 4;

    mouseCursor.style.transform = "translate(" + placeX + 'px,' + placeY + 'px)';

    mouseDot.style.transform = "translate(" + placeXS + 'px,' + placeYS + 'px)';

}

let header = document.querySelector('header.page-header'),

    nav = document.querySelector('header.page-header nav.navbar');
header.style.paddingBottom = nav.offsetHeight;

let notFooter = document.querySelector('.not-footer');
let foooter = document.querySelector("footer.page-footer");

notFooter.style.paddingBottom = foooter.offsetHeight;