// variables

let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountains = document.getElementById('mountains');
let road = document.getElementById('road');
let title = document.getElementById('title');

//Parallax Scrolling Efect

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value);
    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.2 + 'px';
    mountains.style.top = value * 0.2 + 'px';
    road.style.top = value * 0.1 + 'px';
    title.style.top = value * 1 + 'px';
})