const bouton = document.getElementById("top-button");
const loader = document.querySelector('.loader');
const checkbox = document.getElementsByClassName('checkbox')[0];
const TL = gsap.timeline({paused: true}); 
const site = document.querySelector('.site');

window.addEventListener('load', () => { 
    loader.classList.add('fondu-out');
    TL.staggerFrom(site, 0.5, {opacity: 0, ease: "power2.out"});
    TL.play();
});

window.addEventListener('scroll', () => {
    if(window.scrollY > -10 && window.scrollY < 2500) {
        bouton.style.display="none";
    } else {
        bouton.style.display="block";
    }
});

checkbox.addEventListener('click', () => {
    alert('Merci d\'avoir lu le site !');
});



