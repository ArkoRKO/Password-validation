const clear = document.querySelector('.clear');
const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close');

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');

	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			showPopup();
		}
	});
};

const showPopup = () => {
	if (
		pass.value !== '' &&
		pass2.value !== '' &&
		email.value !== '' &&
		username.value !== ''
	) {
		popup.classList.add('show-popup');
	}
};

// argument INPUT z funkcji "checkform" przechowuje tablicę z naszymi inputami
// argument EL odnosi się do każdej zmiennej, którą umieściliśmy w tablicy

closePopup.addEventListener('click', (e) => {
	e.preventDefault();
	popup.classList.remove('show-popup');
	[username, pass, pass2, email].forEach((el) => {
		el.value = '';
	});
});

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm([username, pass, pass2, email]);
});

clearBtn.addEventListener('click', (e) => {
	e.preventDefault();
	[username, pass, pass2, email].forEach((el) => {
		el.value = '';
	});
});
