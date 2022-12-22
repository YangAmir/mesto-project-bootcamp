

const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close-bnt');
const ProfileEdit = document.querySelector('.profile__edit-btn');


ProfileEdit.addEventListener('click', popupOpen);
function popupOpen(){
  popup.classList.add('popup__open');
}

popupClose.addEventListener('click', closeBtn);
function closeBtn(){
  popup.classList.remove('popup__open');
}

