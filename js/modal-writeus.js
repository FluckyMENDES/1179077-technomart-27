let openButton = document.querySelector(".btn-writeus");
let popup = document.querySelector(".modal-writeus");
let closeButton = popup.querySelector(".modal-btn-close-writeus");
let form = popup.querySelector("form");
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
form.addEventListener("submit", function (evt){
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
        if (popup.classList.contains("modal-show")) { // Если у модального окна есть класс "modal-show"
            popup.classList.remove("modal-show"); // Удалить класс "modal-show"
            popup.classList.remove("modal-error");
        }
    }
})

// // Появление модального окна modal-writeus
// document.getElementById('modal_writeus_btn').onclick = function() {
//     document.getElementById('modal_writeus').classList.remove('visually-hidden');
// }
// // Скрытие модального окна modal-writeus
// document.getElementById('modal_writeus_btn_close').onclick = function() {
//     document.getElementById('modal_writeus').classList.add('visually-hidden');
// }
