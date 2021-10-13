import Me from '../helpers/dom.js';
import Login from './logIn.js';

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
  Login.show();
}

const hookEvents = () => {
  const signup = document.querySelector('.btn_modal_signup');
  signup.addEventListener('click', () => {
    show();
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

  const btnSignup = Me.createDOM('button', ['btn', 'btn_choose', 'btn_choose_active', 'modal__btn', 'modal__btn_choose'], {
    'type': 'button',
  });
  btnSignup.innerText = 'Create acccount';

  const btnLogin = Me.createDOM('button', ['btn', 'btn_choose', 'modal__btn', 'modal__btn_choose'], {
    'type': 'button',
  });
  btnLogin.innerText = 'Log in';
  btnLogin.onclick = switchForm;

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

const createSignupForm = () => {
  const form = Me.createDOM('form', ['form', 'modal__form', 'modal__form_signup'], {
    'action': ''
  });

  const nameLabel = Me.createDOM('label', ['form__label', 'modal__form-label'], {
    'for': 'signupName',
  });
  nameLabel.innerText = 'Name';
  const nameInput = Me.createDOM('input', ['form__input', 'form__input_name', 'modal__form-input', 'modal__form-input_text', 'modal_shadow'], {
    'name': 'name',
    'type': 'text',
    'id': 'signupName',
    'required': 'true'
  });

  const emailLabel = Me.createDOM('label', ['form__label', 'modal__form-label'], {
    'for': 'signupEmail'
  });
  emailLabel.innerText = 'Email';
  const emailInput = Me.createDOM('input', ['form__input', 'form__input_email', 'modal__form-input', 'modal__form-input_email', 'modal_shadow'], {
    'name': 'email',
    'type': 'text',
    'id': 'signupEmail',
    'required': 'true'
  });

  const passwordLabel = Me.createDOM('label', ['form__label', 'modal__form-label'], {
    'for': 'signupPassword'
  });
  passwordLabel.innerText = 'Password';
  const passwordInput = Me.createDOM('input', ['form__input', 'form__input_password', 'modal__form-input', 'modal__form-input_password', 'modal_shadow'], {
    'name': 'password',
    'type': 'password',
    'id': 'signupPassword',
    'required': 'true'
  });

  const agreement = Me.createDOM('div', ['form__checkbox-container', 'modal__form-checkbox-container']);
  const agreementCheckbox = Me.createDOM('input', ['form__checkbox', 'form__checkbox_agreement', 'modal__form-input', 'modal__form-input_checkbox', 'modal__form-input_agreement'], {
    'name': 'agreement',
    'type': 'checkbox',
    'id': 'agreement',
    'required': 'true'
  });
  const agreementText = Me.createDOM('label', ['form__checkbox-text', 'form__checkbox-text_agreement', 'modal__form-checkbox-text', 'modal__form-checkbox-text_agreement'], {
    'for': 'agreement'
  });

  const agreementLink1 = Me.createDOM('a', ['form__checkbox-link', 'form__checkbox-link_agreement', 'modal__form-checkbox-link', 'modal__form-checkbox-link_agreement'], {
    'href': ' '
  });
  agreementLink1.innerText = 'User Agreement';

  const agreementLink2 = Me.createDOM('a', ['form__checkbox-link', 'form__checkbox-link_agreement', 'modal__form-checkbox-link', 'modal__form-checkbox-link_agreement'], {
    'href': ' '
  });
  agreementLink2.innerText = 'Privacy Policy';

  const submitBtn = Me.createDOM('input', ['form__input', 'form__input_submit', 'modal__form-input', 'modal__form-input_submit', 'modal_shadow'], {
    'type': 'submit',
    'value': 'send'
  });

  Me.appendChildren(agreementText, ['Agree with the ', agreementLink1, ' and ', agreementLink2])

  Me.appendChildren(form, [nameLabel, nameInput, emailLabel, emailInput, passwordLabel, passwordInput, agreement, submitBtn]);
  Me.appendChildren(agreement, [agreementCheckbox, agreementText]);

  return form;
}

const background = Me.createDOM('div', ['modal__background', 'flex', 'flex-center']);
const window = Me.createDOM('div', ['modal', 'modal_signup']);
const windowHeader = createHeader();
const windowContainer = Me.createDOM('div', ['modal__container', 'modal__container_signup']);
const windowBtnsChoose = createBtnsChoose();
const windowBtnsSocials = createBtnsSocials();
const windowForm = createSignupForm();

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