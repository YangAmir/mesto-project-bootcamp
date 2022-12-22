

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




const ProfileAdd = document.querySelector('.profile__add-btn').addEventListener('click',function checkPopup(){
  popup.classList.add('popup__open');
PopupTitle.textContent = 'Новое место';
})
const PopupTitle = document.querySelector('.popup__title');




const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


let allImages = document.querySelector('.cards')
const DocumentFragment = document.createDocumentFragment();
const cardTitle = document.querySelector('.card__title')

initialCards.forEach(function(url,elem){
let image = document.createElement('img');
image.src = url.link;
DocumentFragment.appendChild(image);
});
allImages.appendChild(DocumentFragment);






// initialCards.forEach(function(url,el,oa){
// let img = document.createElement('img');
//   img.src = url;
//   DocumentFragment.appendChild(img);
// });

// allImages.appendChild(DocumentFragment);
