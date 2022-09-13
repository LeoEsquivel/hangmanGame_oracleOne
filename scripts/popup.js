const closePopUp = document.getElementById('popupclose');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup'); 

const msgError = document.getElementById('msg');
const infoError = document.getElementById('info');

const isDisplayed = ( display ) => {
    overlay.style.display = display;
    popup.style.display = display;
}

const showErrorMessage = (msg, info) => {
    msgError.innerText = msg;
    infoError.innerText = info;
}

closePopUp.onclick = () => {
    isDisplayed('none');
}

export const showPopup = ( msg, info ) => {
    showErrorMessage(msg, info);
    isDisplayed('block');
}