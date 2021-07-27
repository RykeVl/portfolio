// get DOMs objects

const time = document.getElementById('time');
const calendar = document.getElementById('calendar');
const body = document.body;
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

const blockquote = document.querySelector('blockquote');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

const refreshQuoteButton = document.getElementById('refresh-quote');
const refreshBackgroundButton = document.getElementById('refresh-background');

// variables

let currentImage = Math.random() * 20 + 1;
currentImage = Math.floor(currentImage),
	initialImage = currentImage;

let currentState = new Date().getHours(),
	initialState = currentState;


// show and update time

function showTime() {
	function checkZero(time) {
		return (time < 10) ? '0' + time : time;
	}

	let days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		],
		months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"December",
			"November"
		],
		date = new Date(),
		hours = date.getHours(),
		mins = date.getMinutes(),
		secs = date.getSeconds(),
		day = date.getUTCDate(),
		month = date.getUTCMonth(),
		dayOfTheWeek = date.getUTCDay();

	if (secs === 0 && mins === 0) {
		refreshBackground();
	}

	time.innerText = `${hours}:${checkZero(mins)}:${checkZero(secs)}`;
	calendar.innerText = `${days[dayOfTheWeek]}, ${day} of ${months[month]}`;

	setTimeout(showTime, 1000);
}

// * set text

function setText() {
	let date = new Date(),
		hours = date.getHours();

	if (hours < 6) {
		greeting.innerText = "Good Night, ";
	} else if (hours < 12) {
		greeting.innerText = "Good Morning, ";
	} else if (hours < 18) {
		greeting.innerText = "Good Day, ";
	} else {
		greeting.innerText = "Good Evening, ";
	}
}

// get name from local storage

function getName() {
	if (localStorage.name === null || localStorage.name === '' || localStorage.name === undefined) {
		localStorage.name = '[Enter Name]';
	}
	name.innerText = localStorage.name;
}

// set name from local storage

function setName(e) {
	if (e.type === 'keypress') {
		if (e.keyCode == 13) {
			if (e.target.innerText === '') {
				getName();
			}
			localStorage.name = e.target.innerText;
			name.blur();
		}
	} else {
		if (e.target.innerText === '') {
			getName();
		}
		localStorage.name = e.target.innerText;
	}
}

// get focus from local storage

function getFocus() {
	if (localStorage.focus === null || localStorage.focus === '' || localStorage.focus === undefined) {
		localStorage.focus = '[Enter Your Focus]';
	}
	focus.innerText = localStorage.focus;
}

// set focus from local storage

function setFocus(e) {
	if (e.type === 'keypress') {
		if (e.keyCode == 13) {
			if (e.target.innerText === '') {
				getFocus();
			}
			localStorage.focus = e.target.innerText;
			focus.blur();
		}
	} else {
		if (e.target.innerText === '') {
			getFocus();
		}
		localStorage.focus = e.target.innerText;
	}
}

// clean input on click

function clickClean(e) {
	let oldText = e.innerText;
	e.target.innerText = '';
}

// refresh background-image

function refreshBackground() {
	function currentText(oneTwo) {
		return (oneTwo < 10) ? '0' + oneTwo : oneTwo;
	}

	let date = new Date(),
		hours = date.getHours(),
		img = document.createElement('img'),
		src = '';

	if (currentState < 6) {
		src = `assets/images/night/${currentText(currentImage)}.jpg`;
		img.src = src;
		img.onload = () => {
			body.style.backgroundImage = `url('${src}')`;
		};
	} else if (currentState < 12) {
		src = `assets/images/morning/${currentText(currentImage)}.jpg`;
		img.src = src;
		img.onload = () => {
			body.style.backgroundImage = `url('${src}')`;
		};
	} else if (currentState < 18) {
		src = `assets/images/day/${currentText(currentImage)}.jpg`;
		img.src = src;
		img.onload = () => {
			body.style.backgroundImage = `url('${src}')`;
		};
	} else {
		src = `assets/images/evening/${currentText(currentImage)}.jpg`;
		img.src = src;
		img.onload = () => {
			body.style.backgroundImage = `url('${src}')`;
		};
	}

	if (currentImage === 20) {
		currentImage = 1;
	} else {
		currentImage++;
	}

	if (currentState === 23) {
		currentState = 0;
	} else {
		currentState++;
	}

	if (currentState === initialState) {
		currentImage = initialImage;
	}
}

// get quote 

async function getQuote() {
	const url = `https://api.adviceslip.com/advice`;
	const res = await fetch(url);
	const data = await res.json();
	blockquote.textContent = data.slip.advice;
}

// get weather

async function getWeather() {
	if (localStorage.city === null || localStorage.city === '' || localStorage.city === undefined) {
		localStorage.city = 'Minsk';
	}

	if (city.innerText === '') {
		city.innerText = localStorage.city;
	}

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.city}&lang=en&appi	d=9b53337bd7683f88f51d3d4ca25aada6&units=metric`;
	const res = await fetch(url);

	console.log(`API-request. Status: ${res.status}`);

	if (res.status === 200) {
		const data = await res.json();
		weatherIcon.className = 'weather-icon owf';
		weatherIcon.classList.add(`owf-${data.weather[0].id}`);
		temperature.textContent = `Temperature: ${data.main.temp}°C`;
		wind.textContent = `Wind: ${data.wind.speed}m/s`;
		humidity.textContent = `Humidity: ${data.main.humidity}%`;

		if (localStorage.city === null || localStorage.focus === '' || localStorage.focus === undefined) {
			localStorage.city = 'Minsk';
		}
	} else {
		city.innerText = 'Wrong City';
		weatherIcon.className = '';
		temperature.textContent = ``;
		wind.textContent = ``;
		humidity.textContent = ``;
	}
}

// set weather city

function setCity(e) {
	if (e.type === 'keypress') {
		if (e.keyCode == 13) {
			if (e.target.innerText === '') {
				getWeather();
			}
			localStorage.city = e.target.innerText;
			getWeather();
			city.blur();
		}
	} else {
		if (e.target.innerText === '') {
			getWeather();
		}
		localStorage.city = e.target.innerText;
		getWeather();
	}
}

// event listeners

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click', clickClean);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', clickClean);
refreshBackgroundButton.addEventListener('click', refreshBackground);
refreshQuoteButton.addEventListener('click', getQuote);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);
city.addEventListener('click', clickClean);

// run functions

document.addEventListener('DOMContentLoaded', getQuote);
document.addEventListener('DOMContentLoaded', getWeather);

showTime();
setText();
refreshBackground();
getName();
getFocus();