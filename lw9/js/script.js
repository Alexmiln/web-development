const prevButton = document.getElementsByClassName('button-left')[0];
const nextButton = document.getElementsByClassName('button-right')[0];
let sliderItems = document.getElementsByClassName('movies__item');
// let slideWidth = document.getElementsByClassName('movies__item')[0].offsetWidth;
let slideWidth = 305;
let sliderWrapper = document.getElementsByClassName("movies__wrapper")[0];
let activeSlides = 4;
let countClones = activeSlides - 1;
let wrapperTranslation = -(slideWidth * countClones);
let clicksCount = 3;

function cloneSlides() {
    for(var i = 0; i < countClones; i++) {
        let clone = sliderItems[sliderWrapper.childElementCount - 1 - i].cloneNode(true);
        sliderWrapper.insertBefore(clone, sliderWrapper.firstElementChild);
    }

    for(var index = 3; index < countClones + 3; index++) {
        let clone = sliderItems[index].cloneNode(true);
        sliderWrapper.append(clone);
    }
    sliderWrapper.style.cssText = "transform: translateX(" + wrapperTranslation + "px";
}

function setEventListeners() {
    nextButton.addEventListener("click", moveNext);
    prevButton.addEventListener("click", movePrev);
}

function toggleTransitionClasses() {
    sliderWrapper.classList.remove("trans");
}

function moveNext() {
    console.log("до Next: " + clicksCount);   
    clicksCount += 1;
    console.log("после Next: " + clicksCount);
    wrapperTranslation -= slideWidth;
    sliderWrapper.style.cssText = "transform: translateX(" +  wrapperTranslation + "px";
    infinitySliderNext();
}

function movePrev() {
    console.log("до Prev: " + clicksCount);  
    clicksCount -= 1;
    console.log("После Prev: " + clicksCount);  
    wrapperTranslation += slideWidth;
    sliderWrapper.style.cssText = "transform: translateX(" +  wrapperTranslation + "px";
    infinitySliderPrev();
}

function infinitySliderNext() {
    if(clicksCount == 14) {
        toggleTransitionClasses();
        wrapperTranslation = -slideWidth * 1;
        sliderWrapper.style.cssText = "transform: translateX(" +  wrapperTranslation + "px";
        clicksCount = 1;
        // setTimeout(toggleTransitionClasses(), 2000); 
    }
}

function infinitySliderPrev() {
    if(clicksCount == 2) {
        console.log(clicksCount);
        toggleTransitionClasses();
        wrapperTranslation = - slideWidth * 15;
        sliderWrapper.style.cssText = "transform: translateX(" +  wrapperTranslation + "px";
        clicksCount = 15;
        // setTimeout(toggleTransitionClasses(), 2000);  
    }
}

function slider() {
    cloneSlides();
    toggleTransitionClasses();
    setEventListeners();
}

slider();