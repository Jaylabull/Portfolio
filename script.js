//Appear on scroll
const scroll = document.querySelector('#aboutme')
window.addEventListener('scroll', onScroll)

// onScroll()

function onScroll (){
    if (window.scrollY > scroll.offsetHeight + 200){
        scroll.classList.add('show')
        scroll.classList.remove('hide')
    }
}

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

