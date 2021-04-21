//AboutMe Appear on scroll
// const scroll = document.querySelector('#aboutme')
// window.addEventListener('scroll', onScroll)

// function onScroll (){
//     if (window.scrollY > scroll.offsetHeight + 200){
//         scroll.classList.add('show')
//         scroll.classList.remove('hide')
//     }
// }

$(document).ready(function () {
//Scroll to section
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
//Projects appear on scroll
    $(window).on('scroll', function() {
        const pgTop = $(document).scrollTop();
        const pgBott = pgTop + $(window).height();
        const projectCard = $(".project-card");

        for(var i = 0; i < projectCard.length; i++) {
            var projectCards = projectCard[i];

        if($(projectCards).position().top < pgBott){

            $(projectCard).addClass('visible');
            $(projectCard).removeClass('hide');
        }
        }
    })
});

// Dynamic Nav Bar
const nav = document.querySelector('.nav-menu')
window.addEventListener('scroll', fixNav)

function fixNav (){
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active')
    } else{
        nav.classList.remove('active')
    }
}

