
//Parallax Scrolling Efect

// variables

let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountains = document.getElementById('mountains');
let road = document.getElementById('road');
let title = document.getElementById('title');

// event

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.2 + 'px';
    mountains.style.top = value * 0.2 + 'px';
    road.style.top = value * 0.1 + 'px';
    title.style.top = value * 1 + 'px';
})


//slider section

// variables
let arrowLeft = document.getElementById('left');
let arrowRight = document.getElementById('right');
let activeOne = document.getElementById('active');
let numbList = [...document.querySelectorAll('.numbers')];

arrowRight.addEventListener('click', ()=>{
    rightAttow(numbList);
    changeSlide();

});


arrowLeft.addEventListener('click', ()=>{
    
    leftArrow(numbList);
    changeSlide();
    

});




function rightAttow(numbList){
    let first = numbList[0].innerHTML;
    let firstElement = numbList[0];
    for (let i = 0; i < numbList.length-1; i++)
{
    numbList[i].innerHTML = numbList[i+1].innerHTML;
    numbList[i] = numbList[i+1];
}

numbList[numbList.length-1].innerHTML = first;
numbList[numbList.length-1] = firstElement;


for(let i = 0; i < numbList.length; i++){
    numbList[i].setAttribute('rel', numbList[i].innerHTML) ;
}


}
function leftArrow(numbList){
    let last = numbList[numbList.length-1].innerHTML;
    let lastElement = numbList[numbList.length-1];
    
    
    for (let i = numbList.length-1; i > 0 ; i--)
    {
        numbList[i].innerHTML = numbList[i-1].innerHTML;
        numbList[i] = numbList[i-1];
    }
    
    numbList[0].innerHTML = last;
    numbList[0] = lastElement;
    
    for(let i = 0; i < numbList.length; i++){
        numbList[i].setAttribute('rel', numbList[i].innerHTML);
    }

}

function changeSlide(){
    document.getElementsByClassName('activeSlide')[0].classList.remove('activeSlide');
    let SliderToShow = [...document.getElementsByClassName('active')][0].getAttribute('rel');

    let newSlide = document.getElementById(SliderToShow);
    newSlide.classList.add('activeSlide');
}