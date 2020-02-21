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


// // Появление модального окна modal-map
// document.getElementById('modal_map_btn').onclick = function() {
//     document.getElementById('modal_map').classList.remove('visually-hidden');
// }
// // Скрытие модального окна modal-map
// document.getElementById('modal_map_btn_close').onclick = function() {
//     document.getElementById('modal_map').classList.add('visually-hidden');
// }

