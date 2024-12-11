const body = document.body,
	keyboardLayoutEng = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
		"q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
		"caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
		"shift", "z", "x", "c", "v", "b", "n", "m", ",", ".",
		"language", "left", "space", "right", "sound", "speak", "done"
	],
	keyboardLayoutRu = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
		"й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
		"caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
		"shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".",
		"language", "left", "space", "right", "sound", "speak", "done"
	],
	test = ["Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Comma", "Period", "Slash"],
	lettersRatio = {
		а: "KeyF",
		б: "Comma",
		в: "KeyD",
		г: "KeyU",
		д: "KeyL",
		е: "KeyT",
		ж: 'Semicolon',
		з: "KeyP",
		и: "KeyB",
		й: "KeyQ",
		к: "KeyR",
		л: "KeyK",
		м: "KeyV",
		н: "KeyY",
		о: "KeyJ",
		п: "KeyG",
		р: "KeyH",
		с: "KeyC",
		т: "KeyN",
		у: "KeyE",
		ф: "KeyA",
		х: "BracketLeft",
		ъ: "BracketRight",
		ц: "KeyW",
		ч: "KeyX",
		ш: "KeyI",
		щ: "KeyO",
		ы: "KeyS",
		ь: "KeyM",
		э: "Quote",
		ю: "Period",
		я: "KeyZ"
	},
	lettersRatioNames = Object.getOwnPropertyNames(lettersRatio),
	textArea = document.querySelector('textarea'),
	casualKeySound = new Audio('assets/key_sound.mp3'),
	casualKeySoundRu = new Audio('assets/key_sound_ru.mp3'),
	spaceSound = new Audio('assets/space.mp3'),
	shiftSound = new Audio('assets/shift.mp3'),
	capsSound = new Audio('assets/caps.mp3'),
	enterSound = new Audio('assets/enter.mp3'),
	backspaceSound = new Audio('assets/backspace.mp3'),
	tringSound = new Audio('assets/tring.mp3'),
	SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition,
	recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.addEventListener('result', (e) => {
	textArea.innerHTML += `${e.results[0][0].transcript}\n`;
});

let keys = [];

textArea.addEventListener('focus', () => {
	keyboard.show();
});

textArea.addEventListener('keydown', (e) => {
	e.preventDefault();
});

textArea.addEventListener('blur', (e) => {
	e.target.focus();
});

textArea.addEventListener('click', (e) => {
	keyboard.cursorPosition = e.target.selectionStart;
	keyboard._checkShift(keyboard.cursorPosition);
});

body.addEventListener('keydown', (e) => {
	e.preventDefault;
	let highlight = `.${e.code}`;
	if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
		highlight = document.querySelector('.Shift');
		highlight.click();
	} else if (e.code === 'ArrowDown' && e.repeat === false) {
		keyboard.hide();
		return;
	} else if (e.code === 'ArrowUp' && e.repeat === false) {
		keyboard.show();
		return;
	} else if (e.code === 'ArrowLeft') {
		keyboard.cursorPosition--;
		keyboard._cursorTrack(keyboard.cursorPosition);
		return;
	} else if (e.code === 'ArrowRight') {
		keyboard.cursorPosition++;
		keyboard._cursorTrack(keyboard.cursorPosition);
		return;
	} else if (e.code === 'Backspace') {
		highlight = document.querySelector('.Backspace');
		highlight.click();
	} else {
		highlight = document.querySelector(`.${e.code}`);
		highlight.click();
	}

	highlight.classList.add('pressed');
});

body.addEventListener('keyup', (e) => {
	let highlight;
	if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
		highlight = document.querySelector('.Shift');
	} else {
		highlight = document.querySelector(`.${e.code}`);
	}

	highlight.classList.remove('pressed');
});

class Keyboard {
	keyboardBlock = document.createElement('div');
	keyboard__keys = document.createElement('div');

	cursorPosition = textArea.selectionStart;
	leftText = '';
	rightText = '';

	capslock = false;
	shift = false;
	language = true;
	sound = false;
	speak = false;

	initialize() {

		this.keyboardBlock.classList.add('keyboard');
		this.keyboard__keys.classList.add('keyboard__keys');

		this.keyboard__keys.appendChild(this._makeKeys());


		this.keyboardBlock.appendChild(this.keyboard__keys);
		body.appendChild(this.keyboardBlock);

		keys = document.querySelectorAll('.key--casual');
		textArea.focus();
	}

	_makeKeys() {
		let keysFragments = document.createDocumentFragment(),
			keyboardLanguage = (this.language) ? keyboardLayoutEng : keyboardLayoutRu;

		function createIconHTML(icon_name) {
			return `<i class="material-icons">${icon_name}</i>`;
		};

		keyboardLanguage.forEach(key => {
			let keyButton = document.createElement('button');
			keyButton.classList.add('keyboard__key')

			switch (key) {
				case 'backspace':
					keyButton.classList.add('keyboard__key--wide', 'Backspace');
					keyButton.innerHTML = createIconHTML(key);

					keyButton.addEventListener('click', (e) => {
						this.leftText = this.leftText.slice(0, -1);
						textArea.innerHTML = this.leftText + this.rightText;
						this.cursorPosition--;
						this._cursorTrack(this.cursorPosition);
						this._playSound(backspaceSound);
					});

					break;

				case 'left':
					keyButton.classList.add('keyboard__key--wide', 'Left');
					keyButton.innerHTML = createIconHTML('keyboard_arrow_left');

					keyButton.addEventListener('click', (e) => {
						this.cursorPosition--;
						this._cursorTrack(this.cursorPosition);
					});

					break;

				case 'right':
					keyButton.classList.add('keyboard__key--wide', 'Right');
					keyButton.innerHTML = createIconHTML('keyboard_arrow_right');

					keyButton.addEventListener('click', (e) => {
						this.cursorPosition++;
						this._cursorTrack(this.cursorPosition);
					});

					break;

				case 'caps':
					keyButton.classList.add('keyboard__key--wide', 'CapsLock');
					keyButton.innerHTML = createIconHTML('keyboard_capslock');

					if (this.capslock) {
						keyButton.classList.add('keyboard__key--active')
					}

					keyButton.addEventListener('click', (e) => {
						this.capslock = !this.capslock;
						keyButton.classList.toggle('keyboard__key--active');
						this._playSound(capsSound);

						keys.forEach(key => {
							key.innerHTML = this._checkShift(key);
						});
					});

					break;

				case 'shift':
					keyButton.classList.add('keyboard__key--wide', 'Shift');
					keyButton.innerHTML = createIconHTML('arrow_circle_up');

					if (this.shift) {
						keyButton.classList.add('keyboard__key--active');
					}

					keyButton.addEventListener('click', (e) => {
						this.shift = !this.shift;
						keyButton.classList.toggle('keyboard__key--active');
						this._playSound(shiftSound);

						keys.forEach(key => {
							key.innerHTML = this._checkShift(key);
						});
					});

					break;

				case 'enter':
					keyButton.classList.add('keyboard__key--wide', 'Enter')
					keyButton.innerHTML = createIconHTML('keyboard_return');

					keyButton.addEventListener('click', (e) => {
						this.leftText += '\n';
						textArea.innerHTML = this.leftText + this.rightText;
						this.cursorPosition++;
						this._cursorTrack(this.cursorPosition);
						this._playSound(enterSound);
					});

					break;

				case 'language':
					keyButton.classList.add('keyboard__key--wide', 'language')
					keyButton.innerHTML = (this.language) ? 'ENG' : 'RU';

					keyButton.addEventListener('click', (e) => {
						this._changeLanguage();
					});

					break;

				case 'space':
					keyButton.classList.add('keyboard__key--extra-wide', 'Space')
					keyButton.innerHTML = createIconHTML('space_bar');

					keyButton.addEventListener('click', (e) => {
						textArea.innerHTML += ' ';
						this.cursorPosition++;
						this._cursorTrack(this.cursorPosition);
						this._playSound(spaceSound);
					});

					break;

				case 'sound':
					keyButton.classList.add('keyboard__key--wide', 'Sound')
					keyButton.innerHTML = createIconHTML('volume_off');

					keyButton.addEventListener('click', (e) => {
						if (this.sound) {
							keyButton.innerHTML = createIconHTML('volume_off');
							keyButton.classList.remove('keyboard__key--active');
							this.sound = false;
						} else {
							keyButton.innerHTML = createIconHTML('volume_up');
							keyButton.classList.add('keyboard__key--active');
							this.sound = true;
						}
					});

					break;

				case 'speak':
					keyButton.classList.add('keyboard__key--wide');

					if (this.speak) {
						keyButton.innerHTML = createIconHTML('mic_on');
						keyButton.classList.add('keyboard__key--active');
					} else {
						keyButton.innerHTML = createIconHTML('mic_off');
						keyButton.classList.remove('keyboard__key--active');
					}

					keyButton.addEventListener('click', (e) => {
						if (this.speak) {
							keyButton.innerHTML = createIconHTML('mic_off');
							keyButton.classList.remove('keyboard__key--active');
							this.speak = false;
							this._speak();
						} else {
							keyButton.innerHTML = createIconHTML('mic');
							keyButton.classList.add('keyboard__key--active');
							this.speak = true;
							this._speak();
						}
					});

					break;

				case 'done':
					keyButton.classList.add('keyboard__key--wide', "keyboard__key--dark")
					keyButton.innerHTML = createIconHTML('keyboard_hide');

					keyButton.addEventListener('click', (e) => {
						this.hide();
					});

					break;

				default:
					keyButton.classList.add('key--casual');
					if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(key)) {
						keyButton.classList.add(`Digit${key}`);
						keyButton.innerText = this._checkShift(keyButton);
					} else if (key === ',') {
						keyButton.classList.add('Comma');
						keyButton.innerText = this._checkShift(keyButton);
					} else if (key === '.') {
						(this.language) ? keyButton.classList.add('Period'): keyButton.classList.add('Slash');
						keyButton.innerText = this._checkShift(keyButton);
					} else {
						if (lettersRatioNames.includes(key)) {
							keyButton.classList.add(`${lettersRatio[key]}`);
						} else {
							keyButton.classList.add(`Key${key.toUpperCase()}`);
						}
						keyButton.innerText = key;
						keyButton.innerText = this._checkShift(keyButton);
					}

					keyButton.addEventListener('click', (e) => {
						// textArea.focus();
						this.leftText += e.target.innerText;
						textArea.innerHTML = this.leftText + this.rightText;
						this.cursorPosition++;
						this._cursorTrack(this.cursorPosition);
						if (this.language === true) {
							this._playSound(casualKeySound);
						} else {
							this._playSound(casualKeySoundRu);
						}
					});

					break;
			}

			keysFragments.appendChild(keyButton);
			if (['backspace', 'p', 'enter', '.', 'ъ'].includes(key)) {
				keysFragments.appendChild(document.createElement('br'));
			}
		})

		return keysFragments;
	}

	_cursorTrack(pos) {
		this.cursorPosition = (pos < 0) ? 0 : pos;
		if (pos > textArea.innerHTML.length) {
			this.cursorPosition = textArea.innerHTML.length;
		}
		textArea.selectionStart = this.cursorPosition;
		if (textArea.selectionStart !== textArea.selectionEnd) {
			textArea.selectionEnd = this.cursorPosition;
		}
		this.leftText = textArea.innerHTML.slice(0, this.cursorPosition);
		this.rightText = textArea.innerHTML.slice(this.cursorPosition);
	};


	_speak() {
		if (this.speak) {
			recognition.start();
			recognition.addEventListener('end', recognition.start);
		} else {
			recognition.abort();
			recognition.removeEventListener('end', recognition.start);
		}
	}

	_playSound(soundObject) {
		if (this.sound) {
			soundObject.currentTime = 0;
			soundObject.play();
		}
	}

	_changeLanguage() {
		this.language = !this.language;
		recognition.lang = (this.language) ? 'en-US' : 'ru-RU';

		this.keyboardBlock.innerHTML = '';
		this.keyboard__keys.innerHTML = '';
		this.initialize();
	}

	_checkShift(k) {
		let check = k.classList[k.classList.length - 1];
		if (this.shift) {
			if (test.includes(check)) {
				switch (check) {
					case 'Digit1':
						return '!';
					case 'Digit2':
						return (this.language) ? '@' : '"';
					case 'Digit3':
						return (this.language) ? '#' : '№';
					case 'Digit4':
						return (this.language) ? '$' : ';';
					case 'Digit5':
						return '%';
					case 'Digit6':
						return (this.language) ? '^' : ':';
					case 'Digit7':
						return (this.language) ? '&' : '?';
					case 'Digit8':
						return '*';
					case 'Digit9':
						return '(';
					case 'Digit0':
						return ')';
					case 'Comma':
						if (this.language) {
							return '<';
						}
						return (this.capslock) ? 'б' : 'Б';
					case 'Period':
						if (this.language) {
							return '>';
						}
						return (this.capslock) ? 'ю' : 'Ю';
					case 'Slash':
						return ',';

					default:
						break;
				}
				return k.innerHTML;
			}
			return (this.capslock) ? k.innerHTML.toLowerCase() : k.innerHTML.toUpperCase();
		} else {
			if (test.includes(check)) {
				switch (check) {
					case 'Digit1':
						return '1';
					case 'Digit2':
						return '2';
					case 'Digit3':
						return '3';
					case 'Digit4':
						return '4';
					case 'Digit5':
						return '5';
					case 'Digit6':
						return '6';
					case 'Digit7':
						return '7';
					case 'Digit8':
						return '8';
					case 'Digit9':
						return '9';
					case 'Digit0':
						return '0';
					case 'Comma':
						if (this.language) {
							return ',';
						}
						return (this.capslock) ? 'Б' : 'б';
					case 'Period':
						if (this.language) {
							return '.';
						}
						return (this.capslock) ? 'Ю' : 'ю';
					case 'Slash':
						return '.';

					default:
						break;
				}
				return k.innerHTML;
			}
			return (this.capslock) ? k.innerHTML.toUpperCase() : k.innerHTML.toLowerCase();
		}
	}

	hide() {
		textArea.blur();
		this.keyboardBlock.classList.add('keyboard--hidden');
	}

	show() {
		textArea.focus();
		this.keyboardBlock.classList.remove('keyboard--hidden');
	}
}

let keyboard = new Keyboard;

window.addEventListener('DOMContentLoaded', () => {
	keyboard.initialize();
})