"use strict";

let headBut = document.querySelector('.headButton')
let headInput = document.querySelector('.headInput')
let mainSlider = document.querySelector('.mainSlider')
let mainImgLine = document.querySelector('.mainImgLine')
let imgS = document.querySelectorAll('.sliderImg')
let buttonBack = document.querySelector('.back')
let buttonNext = document.querySelector('.next')
let points = document.querySelector('.points')

let x1 = 0
let x2 = 0
let offset = 0
let numberOfPictures = 1
let isMouseOn = false
let isMouseDownDrag

mainSlider.addEventListener('mousedown', mouseDown)
mainSlider.addEventListener('mousemove', mouseMove)
mainSlider.addEventListener('mouseup', mouseUp)

mainSlider.addEventListener('touchstart', touchStart)
mainSlider.addEventListener('touchmove', touchMove)
mainSlider.addEventListener("touchend", handleEnd);

let timer = setInterval(nextSlide, 5000)

function touchStart(event){
    x1 = event.touches[0].screenX

}

function touchMove(event){
    x2 = event.touches[0].screenX
}

function handleEnd(){
    if (x1 > x2){
        nextSlide()
        clearInterval(timer)
        timer = setInterval(nextSlide, 5000)
    } else if (x1 < x2){
        backSlide()
        clearInterval(timer)
        timer = setInterval(nextSlide, 5000)
    }
}


function mouseDown(event){
    x1 = event.clientX
    isMouseOn = true
}

function mouseMove(event){
    if(isMouseOn){
    x2 = event.clientX
    }
}

function mouseUp(){
    if(isMouseOn){
        if (x2 == 0){
        } 
        else if (x1 < x2){
            backSlide()
            clearInterval(timer)
            timer = setInterval(nextSlide, 5000)
        } 
        else if (x1 > x2){
            nextSlide()
            clearInterval(timer)
            timer =  setInterval(nextSlide, 5000)
        }
    x2 = 0
    isMouseOn = false
    }
}

headBut.addEventListener('click',function(){
    numberOfPictures = headInput.value
    if (numberOfPictures < 1 || numberOfPictures > 3){
        alert('Введите значение от 1 до 3')
    }
    if (numberOfPictures == 1){
        for(let img of imgS){
            img.style.width = 853 + 'px'
            mainImgLine.style.left = -0 + 'px'
        }
    }    
    if (numberOfPictures == 2){
        for(let img of imgS){
            img.style.width = 426.5 + 'px'
            mainImgLine.style.left = -0 + 'px'
        }
    }
    if (numberOfPictures == 3){
        for(let img of imgS){
            img.style.width = 284.3 + 'px'
            mainImgLine.style.left = -0 + 'px'
        }
    }   
})

buttonBack.addEventListener('click', function(){
    backSlide()
    clearInterval(timer)
    timer = setInterval(nextSlide, 5000)
})


function backSlide(){
    if (numberOfPictures == 1){
    offset -= 853
        if (offset < 0){
            offset = 3412;
        }

    mainImgLine.style.left = -offset + 'px'
    }   
    if (numberOfPictures == 2){
        offset -= 426.5
        if (offset < 0){
            offset = 1279.5;
        }

        mainImgLine.style.left = -offset + 'px'
    }
    if (numberOfPictures == 3){
        offset -= 284.333
        if (offset < 0){
            offset = 568.666;
        }

        mainImgLine.style.left = -offset + 'px'
    }
}


buttonNext.addEventListener('click', function(){
    nextSlide()
    clearInterval(timer)
    timer = setInterval(nextSlide, 5000)
})

function nextSlide(){
    if (numberOfPictures == 1){
        offset += 853
        if (offset > 3412){
            offset = 0;
        }

        mainImgLine.style.left = -offset + 'px'
    }
    if (numberOfPictures == 2){
        offset += 426.5
        if (offset > 1279.5){
            offset = 0;
        }

        mainImgLine.style.left = -offset + 'px'
    }
    if (numberOfPictures == 3){
        offset += 284.333
        if (offset > 568.666){
            offset = 0;
        }

        mainImgLine.style.left = -offset + 'px'
    }
}


































