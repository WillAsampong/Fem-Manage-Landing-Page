const hamburgerBtn = document.querySelector('.hamburger-btn');
const showNav = document.querySelector('.show-nav');

hamburgerBtn.addEventListener ("click", showNavToggle);

function showNavToggle() {
    showNav.classList.toggle('mobile-menu');
    if(showNav.classList.contains('mobile-menu')) {
        hamburgerBtn.innerHTML = `<i class="fa fa-bars text-xl font-bold"></i>`;
    } else {
        hamburgerBtn.innerHTML = `<i class="fa fa-xmark text-xl font-bold"></i>`;
    }
}