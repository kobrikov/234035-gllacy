var link = document.querySelector(".btn-feedback");
var popup = document.querySelector(".popup-feedback");
var overlay = document.querySelector(".popup-overlay");

var username = popup.querySelector("[name=popup-name]");
var email = popup.querySelector("[name=popup-email]");
var message = popup.querySelector("[name=popup-message]");

var close = popup.querySelector(".popup-close");
var form = popup.querySelector("form");

link.addEventListener("click", function (event) {
  event.preventDefault();
	popup.classList.add("popup-feedback-show");
	overlay.classList.add("popup-overlay-show");
	if (localStorage.getItem("name") || localStorage.getItem("email")) {
		username.value = localStorage.getItem("name");
		email.value = localStorage.getItem("email");
		message.focus();
	}
	else {
		username.focus();
	}
});

form.addEventListener("submit", function (event) {
	if (!username.value || !email.value) {
		event.preventDefault();
	} else {
		localStorage.setItem("name", username.value);
		localStorage.setItem("email", email.value);
	}
});


close.addEventListener("click", function (event) {
	popup.classList.remove("popup-feedback-show");
	overlay.classList.remove("popup-overlay-show");
});

overlay.addEventListener("click", function (event) {
	popup.classList.remove("popup-feedback-show");
	overlay.classList.remove("popup-overlay-show");
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("popup-feedback-show")) {
			popup.classList.remove("popup-feedback-show");
			overlay.classList.remove("popup-overlay-show");
		}
	}
});

//карта с меткой макета
ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
            center: [59.93931499, 30.32940030],
            zoom: 16
        }, {
            searchControlProvider: "yandex#search"
        }),
        myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
            hintContent: "Gllacy Shop",
            balloonContent: "Ice Cream Shop"
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-tag.png',
            // Размеры метки.
            iconImageSize: [218, 142],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-40, -139]
        });
    myMap.geoObjects.add(myPlacemark);
});
