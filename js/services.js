// Преключение стилей кнопок секции "Сервисы"
var buttons = document.querySelectorAll('.features__bottom__buttons__btn');

for (var button of buttons) {
   button.addEventListener('click', function () {
     buttons.forEach(i => i.classList.remove('features__bottom__buttons__btn-active'));
   
     this.classList.toggle('features__bottom__buttons__btn-active');
   });
};

// Слайдер секции "Сервисы"
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