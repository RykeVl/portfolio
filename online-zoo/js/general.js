import Signup from './general/signUp.js';
import Login from './general/logIn.js';
import HookContact from './general/contact.js';
import HookBurgerClick from './general/burger.js';

function applyEvents() {
  Login.hookEvents();
  Signup.hookEvents();
  HookContact();
  HookBurgerClick();
}

window.addEventListener('load', applyEvents);