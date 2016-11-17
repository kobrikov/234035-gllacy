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
