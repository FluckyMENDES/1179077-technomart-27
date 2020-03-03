// Модальное окно с формой

let openButton = document.querySelector(".btn-writeus");
let popup = document.querySelector(".modal-writeus");
let closeButton = popup.querySelector(".modal-btn-close-writeus");
let submit = popup.querySelector(".btn-red");
let name = popup.querySelector("[name=name]");
let email = popup.querySelector("[name=email]");
let message = popup.querySelector("[name=message");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";


// Пробуем сохранить в localStorage данные
try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");

} catch {
    isStorageSupport = false; // Отключаем localStorage если не поддерживается браузером
}

// let modal = document.querySelectorAll('[id|=modal]');
// let btnCloseModal = document.querySelectorAll('.modal-btn-close');

// btnCloseModal.forEach(item => {
//   item.addEventListener('click', () => {
//     document.querySelector('.modal-show').classList.remove('modal-show');
//   });
// });

// modal.forEach(item => {
//   item.addEventListener('click', () => {
//     let idTarget = item.dataset.modalTarget;
//     document.querySelector(idTarget).classList.add('.modal-show');
//   });
// });

// Открытие модального окна
openButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if(storageName) { // Если в localStorage есть данные добавляем их в поля "Имя" и "E-Mail"
        name.value = storageName;
        email.value = storageEmail;
    }
    message.focus(); // Устанавливем фокус на поле "Сообщение"
})

// Скрытие модального окна
closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
})

// Проверка отправки пустых полей
submit.addEventListener("click", function (evt){
    if(!name.value || !email.value || !message.value) { // Действия если все поля не заполнены
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else { // Действия если все поля заполнены
        if (isStorageSupport) { // Если localStorage поддерживается
            localStorage.setItem("name", name.value); // Сохраняем данные в localStorage
            localStorage.setItem("email", email.value);
        }
    }
})


// Закрытие модального окна если нажата клавиша Esc
window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if(document.querySelector('.modal-show')) {
          document.querySelector('.modal-show').classList.remove('modal-show');
          popup.classList.remove("modal-error");
        }
        // if (popup.classList.contains("modal-show")) { // Если у модального окна есть класс "modal-show"
        //     popup.classList.remove("modal-show"); // Удалить класс "modal-show"
        //     popup.classList.remove("modal-error");
        // }
    }
})


// Модальное окно с картой
let mapButtonOpen = document.querySelector(".btn-map");
let mapPopup = document.querySelector(".modal-map");
let mapButtonClose = mapPopup.querySelector(".modal-btn-close");


mapButtonOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
})

mapButtonClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
})

// Закрытие модального окна если нажата клавиша Esc
window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")) { // Если у модального окна есть класс "modal-show"
            mapPopup.classList.remove("modal-show"); // Удалить класс "modal-show"
        }
    }
})


// Слайдер секции "Сервисы"

// Преключение стилей кнопок
var buttons = document.querySelectorAll('.features__bottom__buttons__btn');

for (var button of buttons) {
   button.addEventListener('click', function () {
     buttons.forEach(i => i.classList.remove('features__bottom__buttons__btn-active'));

     this.classList.toggle('features__bottom__buttons__btn-active');
   });
};


// Слайдер
var featuresText = document.querySelector('.features__bottom__text');

document.getElementById('features_delivery_btn').onclick = function() {
    document.getElementById('features_delivery').classList.remove('visually-hidden');
    document.getElementById('features_guarantee').classList.add('visually-hidden');
    document.getElementById('features_credit').classList.add('visually-hidden');
}

document.getElementById('features_guarantee_btn').onclick = function() {
    document.getElementById('features_delivery').classList.add('visually-hidden');
    document.getElementById('features_guarantee').classList.remove('visually-hidden');
    document.getElementById('features_credit').classList.add('visually-hidden');
}

document.getElementById('features_credit_btn').onclick = function() {
    document.getElementById('features_delivery').classList.add('visually-hidden');
    document.getElementById('features_guarantee').classList.add('visually-hidden');
    document.getElementById('features_credit').classList.remove('visually-hidden');
}
