import Me from '../helpers/dom.js';
import Signup from './signUp.js';

const show = () => {
  Me.body.appendChild(background);
  Me.body.classList.add('inactive');
}

const hide = () => {
  Me.body.removeChild(background);
  Me.body.classList.remove('inactive');
}

const hideClick = (e) => {
  if (e.target.classList.contains('modal__background')) {
    Me.body.removeChild(background);
    Me.body.classList.remove('inactive');
    e.target.removeEventListener('mouseup', hide);
  }
}

const switchForm = () => {
  hide();
  Signup.show();
}

const hookEvents = () => {
  const logins = document.querySelectorAll('.btn_modal_login');
  logins.forEach(a => {
    a.addEventListener('click', () => {
      show();
    });
  });
}

const createHeader = () => {
  const header = Me.createDOM('div', ['modal__header']);
  const logo = Me.createDOM('img', ['modal__header-logo'], {
    'src': './assets/icons/logo.svg',
    'alt': 'logo'
  });
  header.appendChild(logo);

  return header;
}

const createBtnsChoose = () => {
  const btnsChoose = Me.createDOM('div', ['modal__btns', 'modal__btns_choose']);

  const btnSignup = Me.createDOM('button', ['btn', 'btn_choose', 'modal__btn', 'modal__btn_choose'], {
    'type': 'button',
  });
  btnSignup.innerText = 'Create acccount';
  btnSignup.onclick = switchForm;

  const btnLogin = Me.createDOM('button', ['btn', 'btn_choose', 'btn_choose_active', 'modal__btn', 'modal__btn_choose'], {
    'type': 'button',
  });
  btnLogin.innerText = 'Log in';

  Me.appendChildren(btnsChoose, [btnSignup, btnLogin]);

  return btnsChoose;
}

const createBtnsSocials = () => {
  const btnsSocials = Me.createDOM('div', ['modal__btns', 'modal__btns_socials']);

  const btnGoogle = Me.createDOM('button', ['btn', 'btn_socials', 'btn_socials_google', 'modal__btn', 'modal__btn_socials', 'modal_shadow', 'show-after-600-f'], {
    'type': 'button',
  });
  const btnGoogleMobile = Me.createDOM('button', ['btn', 'btn_socials', 'btn_socials_google', 'modal__btn', 'modal__btn_socials', 'modal_shadow', 'show-before-600-f'], {
    'type': 'button',
  });
  const googleIcon = Me.createDOM('img', ['btn__icon_modal'], {
    'src': './assets/icons/google.svg',
    'alt': 'google icon'
  });

  const btnFacebook = Me.createDOM('button', ['btn', 'btn_socials', 'btn_socials_facebook', 'modal__btn', 'modal__btn_socials', 'modal_shadow', 'show-after-600-f'], {
    'type': 'button',
  });
  const btnFacebookMobile = Me.createDOM('button', ['btn', 'btn_socials', 'btn_socials_facebook', 'modal__btn', 'modal__btn_socials', 'modal_shadow', 'show-before-600-f'], {
    'type': 'button',
  });
  const facebookIcon = Me.createDOM('img', ['btn__icon_modal'], {
    'src': './assets/icons/facebook.svg',
    'alt': 'facebook icon'
  });

  btnGoogle.innerText = 'Google Sign in';
  btnGoogle.prepend(googleIcon);
  btnGoogleMobile.innerText = 'Google';
  btnGoogleMobile.prepend(googleIcon.cloneNode());

  btnFacebook.innerText = 'Facebook Sign in';
  btnFacebook.prepend(facebookIcon);
  btnFacebookMobile.innerText = 'Facebook';
  btnFacebookMobile.prepend(facebookIcon.cloneNode());

  Me.appendChildren(btnsSocials, [btnGoogle, btnFacebook, btnGoogleMobile, btnFacebookMobile]);

  return btnsSocials;
}

const createLoginForm = () => {
  const form = Me.createDOM('form', ['form', 'modal__form', 'modal__form_login'], {
    'action': ''
  });

  const emailLabel = Me.createDOM('label', ['form__label', 'modal__form-label'], {
    'for': 'email'
  });
  emailLabel.innerText = 'Email';
  const emailInput = Me.createDOM('input', ['form__input', 'form__input_email', 'modal__form-input', 'modal__form-input_email', 'modal_shadow'], {
    'name': 'email',
    'type': 'text',
    'id': 'loginEmail',
    'required': 'true'
  });

  const passwordLabel = Me.createDOM('label', ['form__label', 'modal__form-label'], {
    'for': 'password'
  });
  passwordLabel.innerText = 'Password';
  const passwordInput = Me.createDOM('input', ['form__input', 'form__input_password', 'modal__form-input', 'modal__form-input_password', 'modal__form-input_password_mb-0', 'modal_shadow'], {
    'name': 'password',
    'type': 'password',
    'id': 'loginPassword',
    'required': 'true'
  });

  const submitBtn = Me.createDOM('input', ['form__input', 'form__input_submit', 'modal__form-input', 'modal__form-input_submit', 'modal_shadow'], {
    'type': 'submit',
    'value': 'send'
  });

  Me.appendChildren(form, [emailLabel, emailInput, passwordLabel, passwordInput, submitBtn]);

  return form;
}

const background = Me.createDOM('div', ['modal__background', 'flex', 'flex-center']);
const window = Me.createDOM('div', ['modal', 'modal_login']);
const windowHeader = createHeader();
const windowContainer = Me.createDOM('div', ['modal__container', 'modal__container_login']);
const windowBtnsChoose = createBtnsChoose();
const windowBtnsSocials = createBtnsSocials();
const windowForm = createLoginForm();

background.appendChild(window);
background.addEventListener('mousedown', (e) => {
  e.target.addEventListener('mouseup', hideClick);
});

Me.appendChildren(window, [windowHeader, windowContainer]);
Me.appendChildren(windowContainer, [windowBtnsChoose, windowBtnsSocials, windowForm]);

export default {
  hookEvents,
  show
};