//CONSTS
const COLOR_WHITE = 'rgb(250, 250, 250)';
const COLOR_YELLOW = 'rgb(243, 227, 85)';
const BG_COLOR = 'background-color';
const ALERT = 'Wybierz najpierw na jakie atrakcje masz ochotę :)';
const forestButton = document.querySelector('.forest-button');
const parkButton = document.querySelector('.park-button');
const bothButton = document.querySelector('.both-button');
const randomPlace = document.querySelector('.random-place');
const placeName = document.querySelector('.place-name');
const placeDecription = document.querySelector('.place-decription');
const placeMap = document.querySelector('.place-map');
let forestTrigger = false;
let parkTrigger = false;
let bothTrigger = false;

//LISTENERS
forestButton.addEventListener('click', ()=> {
    if(!forestTrigger) {
        return forestTrigger = true, parkTrigger = false, bothTrigger = false, changeColorsButtons();
    } else {
        return forestTrigger = false, changeColorsButtons();
    };
});
parkButton.addEventListener('click', ()=> {
    if(!parkTrigger) {
        return parkTrigger = true, forestTrigger = false, bothTrigger = false, changeColorsButtons();
    } else {
        return parkTrigger = false, changeColorsButtons();
    };
});
bothButton.addEventListener('click', ()=> {
    if(!bothTrigger) {
        return bothTrigger = true, forestTrigger = false, parkTrigger = false, changeColorsButtons();
    } else {
        return bothTrigger = false, changeColorsButtons();
    };
});
randomPlace.addEventListener('click', letsRandomPlace);

//FUNCTIONS
function changeColorsButtons() {
    $('.forest-button').css(BG_COLOR, COLOR_WHITE);
    $('.park-button').css(BG_COLOR, COLOR_WHITE);
    $('.both-button').css(BG_COLOR, COLOR_WHITE);
    if(forestTrigger) {
        $('.forest-button').css(BG_COLOR, COLOR_YELLOW);
    } else if(parkTrigger) {
        $('.park-button').css(BG_COLOR, COLOR_YELLOW);
    } else if(bothTrigger) {
        $('.both-button').css(BG_COLOR, COLOR_YELLOW);
    };
    nowClickRandomButton();
};

function forestRandom() {
    const array = warsawForest;
    const arrayLength = array.length; 
    const randomNumber = Math.ceil(Math.random()*arrayLength-1);
    const urlMap =`https://maps.google.com/maps?hl=pl&amp;q=${warsawForest[randomNumber].urlname}+&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`;

    placeName.innerHTML= `<h2> ${warsawForest[randomNumber].name}</h2>`;
    placeDecription.innerHTML= `<h5> ${warsawForest[randomNumber].description} </h5>`
    placeMap.innerHTML= `<iframe class="g-frame" src=${urlMap} width="100%" min-height="100%" frameborder="0"></iframe>`;
};

function parkRandom() {
    const array = warsawPark;
    const arrayLength = array.length; 
    const randomNumber = Math.ceil(Math.random()*arrayLength-1);
    const urlMap =`https://maps.google.com/maps?hl=pl&amp;q=${warsawPark[randomNumber].urlname}+&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`;

    placeName.innerHTML= `<h2> ${warsawPark[randomNumber].name}</h2>`;
    placeDecription.innerHTML= `<h5> ${warsawPark[randomNumber].description} </h5>`
    placeMap.innerHTML= `<iframe class="g-frame" src=${urlMap} width="100%" height="100%" frameborder="0"></iframe>`;
};

function letsRandomPlace() {
    if(forestTrigger){ 
        forestRandom();
    } else if(parkTrigger) {
        parkRandom();
    } else if(bothTrigger) {
        const rand = Boolean(Math.round(Math.random()));
        rand ? forestRandom() : parkRandom();
    } else {
        alert(ALERT);
    };
    randomPlace.classList.add('normal-button');
    randomPlace.classList.remove('shining-button');
}

function nowClickRandomButton() {
    if(forestTrigger || parkTrigger || bothTrigger){
        randomPlace.classList.add('shining-button');
    } else {
        randomPlace.classList.remove('shining-button');
    }
}
