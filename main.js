
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
let numBtn = [...document.getElementsByClassName('numBtn')];

//right arrow event
arrowRight.addEventListener('click', ()=>{
    rightAttow(numbList);
    changeSlideRight();
});


//left arrow event
arrowLeft.addEventListener('click', ()=>{  
    leftArrow(numbList);
    changeSlideLeft()
});



// arrow functions
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

// changing the slides and add aminations

function changeSlideRight(){
    let currentSlide = document.getElementsByClassName('activeSlide');
    let Slidernumber = [...document.getElementsByClassName('active')][0].getAttribute('rel');
    let newSlide = document.getElementById(Slidernumber);

    currentSlide[0].classList.remove('activeSlide');
    
    newSlide.classList.add('movingInRight');
    newSlide.classList.add('activeSlide');

    setTimeout(function() {
        newSlide.classList.remove('movingInRight');
      }, 400);


    
}

function changeSlideLeft(){
    let currentSlide = document.getElementsByClassName('activeSlide');
    let Slidernumber = [...document.getElementsByClassName('active')][0].getAttribute('rel');
    let newSlide = document.getElementById(Slidernumber);

    currentSlide[0].classList.remove('activeSlide');
    
    newSlide.classList.add('movingInLeft');
    newSlide.classList.add('activeSlide');

    setTimeout(function() {
        newSlide.classList.remove('movingInLeft');
      }, 400);
}




// event for the numbers in the slider

numBtn[0].addEventListener('click', () => {
    rightAttow(numbList);
    changeSlideRight();
});

numBtn[1].addEventListener('click', () => {
    leftArrow(numbList);
    changeSlideRight();
})


