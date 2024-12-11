import Me from '../../helpers/dom.js';

const show = () => {
  Me.body.appendChild(background);
  Me.body.classList.add('inactive');
}

const hide = (e) => {
  if (e.target.classList.contains('modal__background')) {
    Me.body.removeChild(background);
    Me.body.classList.remove('inactive');
    e.target.removeEventListener('mouseup', hide);
  }
}

const hookEvents = () => {
  const contacts = document.querySelectorAll('.btn_modal_feedback');
  contacts.forEach(a => {
    a.addEventListener('click', () => {
      show();
    });
  });
}

const createFeedbackForm = () => {
  const form = Me.createDOM('form', ['form', 'modal__form', 'modal__form_feedback', 'width-100'], {
    'action': ''
  });

  const nameLabel = Me.createDOM('label', ['form__label', 'modal__form-label'], {
    'for': 'name'
  });
  nameLabel.innerText = 'Name';
  const nameInput = Me.createDOM('input', ['form__input', 'form__input_text', 'modal__form-input', 'modal__form-input_text', 'modal_shadow'], {
    'name': 'name',
    'type': 'text',
    'id': 'feedbackName',
    'required': 'true'
  });

  const emailLabel = Me.createDOM('label', ['form__label', 'modal__form-label'], {
    'for': 'email'
  });
  emailLabel.innerText = 'Email';
  const emailInput = Me.createDOM('input', ['form__input', 'form__input_email', 'modal__form-input', 'modal__form-input_email', 'modal_shadow'], {
    'name': 'email',
    'type': 'email',
    'id': 'feedbackEmail',
    'required': 'true'
  });

  const messageLabel = Me.createDOM('label', ['form__label', 'modal__form-label'], {
    'for': 'message'
  });
  messageLabel.innerText = 'Feedback';
  const messageTextarea = Me.createDOM('textarea', ['form__textarea', 'form__textarea', 'modal__form-textarea', 'modal_shadow'], {
    'name': 'message',
    'id': 'feedbackMessage',
    'cols': '30',
    'rows': '10',
    'required': 'true'
  });

  const submitBtn = Me.createDOM('input', ['form__input', 'form__input_submit', 'modal__form-input', 'modal__form-input_submit', 'modal_shadow'], {
    'type': 'submit',
    'value': 'send'
  });

  Me.appendChildren(form, [nameLabel, nameInput, emailLabel, emailInput, messageLabel, messageTextarea, submitBtn]);

  return form;
}

const background = Me.createDOM('div', ['modal__background', 'flex', 'flex-center']);
const window = Me.createDOM('div', ['modal', 'modal_feedback']);

const windowTitle = Me.createDOM('h2', ['h2', 'modal__title']);
windowTitle.innerText = 'Leave feedback';
const windowForm = createFeedbackForm();

background.appendChild(window);
background.addEventListener('mousedown', (e) => {
  e.target.addEventListener('mouseup', hide);
});

Me.appendChildren(window, [windowTitle, windowForm]);

export default hookEvents;