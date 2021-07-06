/* ||-- Nabvar --|| */

const burgerBtn = document.querySelector('.burg-cont');
const mobileNav = document.querySelector('.mobile-navbar');

// desktop nav
const dropBtns = document.querySelectorAll('.drop-btn');

//mobile nav 
const accordionZone = document.querySelectorAll('.accordion-zone');


/* ||-- info-section --|| */

imagesArr = [ // this arr is to replace the image when the vport is up to 64 rems
    './blogr-landing-page-main/images/illustration-editor-desktop.svg',
    './blogr-landing-page-main/images/illustration-laptop-desktop.svg',
]

const editorImg = document.querySelector('.img-change');
const laptopImg = document.querySelector('.img-change2');

// showing the mobile navbar
burgerBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('show-mobile-nav');

    if (! mobileNav.classList.contains('show-mobile-nav')) {
        accordionZone.forEach(elmnts => {elmnts.classList.remove('active')})  
    } 
});

// events for mobile menu
accordionZone.forEach((zone) => {
    let counter = 0;

    zone.addEventListener('click', () => {
        accordionZone.forEach(elmnts => {elmnts.classList.remove('active')})

        if (counter == 0) { zone.classList.add('active');} else {zone.classList.remove('active')}
        if (counter >= 1) { counter = 0;} else { counter++}
    });
});

// events for desktop menu
dropBtns.forEach((btn) => {
    let counterOfClicks = 0;

    btn.addEventListener('click', function() {
        const panel = this.nextElementSibling;
        dropBtns.forEach(secBtn => {secBtn.nextElementSibling.classList.remove('show-list')});

        if (counterOfClicks == 0) {panel.classList.add('show-list');} else { panel.classList.remove('show-list'); }
        if (counterOfClicks >= 1) { counterOfClicks = 0 } else { counterOfClicks++ }
    });
    
});

// changing images when resize the width of the screen
function changeImg() {
    if (window.innerWidth >= 1024) {
        editorImg.src = imagesArr[0];
        laptopImg.src = imagesArr[1];
    }
}

changeImg();
