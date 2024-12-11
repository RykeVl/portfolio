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
  const donates = document.querySelectorAll('.btn_modal_donate');
  donates.forEach(a => {
    a.addEventListener('click', () => {
      show();
    });
  });
}

const createAnimalsSelect = () => {
  const select = Me.createDOM('select', ['select', 'modal__select', 'modal__select_animals', 'modal_shadow'], {
    'name': 'animals',
    'id': 'selectAnimals'
  });

  const optionPandas = Me.createDOM('option', ['option', 'modal__option', 'modal__option_pandas'], {
    'value': 'pandas'
  });
  optionPandas.innerText = 'Pandas';

  const optionEagles = Me.createDOM('option', ['option', 'modal__option', 'modal__option_eagles'], {
    'value': 'eagles'
  });
  optionEagles.innerText = 'Eagles';

  const optionGorillas = Me.createDOM('option', ['option', 'modal__option', 'modal__option_gorillas'], {
    'value': 'gorillas'
  });
  optionGorillas.innerText = 'Gorillas';

  const optionAlligators = Me.createDOM('option', ['option', 'modal__option', 'modal__option_alligators'], {
    'value': 'alligators'
  });
  optionAlligators.innerText = 'Alligators';

  Me.appendChildren(select, [optionPandas, optionEagles, optionGorillas, optionAlligators]);

  return select;
}

const createPaymentsBtns = () => {
  const payments = Me.createDOM('div', ['modal__payments-container']);
  const subscription = Me.createDOM('div', ['modal__subscription-container', 'modal__radio-container']);
  const radioMonthly = Me.createDOM('input', ['form__input', 'form__input_radio', 'modal__form-input', 'modal__form-input_radio', 'modal_shadow'], {
    'type': 'radio',
    'id': 'subscriptionMonthly',
    'value': 'monthly',
    'name': 'subscription',
    'checked': 'true'
  });
  const labelMonthly = Me.createDOM('label', ['form__label', 'modal__form-label', 'modal__form-label_radio'], {
    'for': 'subscriptionMonthly',
  });
  labelMonthly.innerText = 'Monthly';
  const radioOnetime = Me.createDOM('input', ['form__input', 'form__input_radio', 'modal__form-input', 'modal__form-input_radio', 'modal_shadow'], {
    'type': 'radio',
    'id': 'subscriptionOnetime',
    'value': 'onetime',
    'name': 'subscription'
  });
  const labelOnetime = Me.createDOM('label', ['form__label', 'modal__form-label', 'modal__form-label_radio'], {
    'for': 'subscriptionOnetime',
  });
  labelOnetime.innerText = 'One-time';

  const amount = Me.createDOM('div', ['modal__amount-container', 'modal__radio-container', 'modal__radio-container_amount']);
  const radio3 = Me.createDOM('input', ['form__input', 'form__input_radio', 'modal__form-input', 'modal__form-input_radio', 'modal_shadow'], {
    'type': 'radio',
    'id': 'amount3',
    'value': '3',
    'name': 'amount',
    'checked': 'true'
  });
  const label3 = Me.createDOM('label', ['form__label', 'modal__form-label', 'modal__form-label_radio', 'modal__form-label_radio_amount'], {
    'for': 'amount3',
  });
  label3.innerText = '$3';

  const radio5 = Me.createDOM('input', ['form__input', 'form__input_radio', 'modal__form-input', 'modal__form-input_radio', 'modal_shadow'], {
    'type': 'radio',
    'id': 'amount5',
    'value': '5',
    'name': 'amount'
  });
  const label5 = Me.createDOM('label', ['form__label', 'modal__form-label', 'modal__form-label_radio', 'modal__form-label_radio_amount'], {
    'for': 'amount5',
  });
  label5.innerText = '$5';

  const radio10 = Me.createDOM('input', ['form__input', 'form__input_radio', 'modal__form-input', 'modal__form-input_radio', 'modal_shadow'], {
    'type': 'radio',
    'id': 'amount10',
    'value': '10',
    'name': 'amount'
  });
  const label10 = Me.createDOM('label', ['form__label', 'modal__form-label', 'modal__form-label_radio', 'modal__form-label_radio_amount'], {
    'for': 'amount10',
  });
  label10.innerText = '$10';

  const radio25 = Me.createDOM('input', ['form__input', 'form__input_radio', 'modal__form-input', 'modal__form-input_radio', 'modal_shadow'], {
    'type': 'radio',
    'id': 'amount25',
    'value': '25',
    'name': 'amount'
  });
  const label25 = Me.createDOM('label', ['form__label', 'modal__form-label', 'modal__form-label_radio', 'modal__form-label_radio_amount'], {
    'for': 'amount25',
  });
  label25.innerText = '$25';

  Me.appendChildren(subscription, [radioMonthly, labelMonthly, radioOnetime, labelOnetime]);
  Me.appendChildren(amount, [radio3, label3, radio5, label5, radio10, label10, radio25, label25]);
  Me.appendChildren(payments, [subscription, amount]);

  return payments;
}

const createCard = () => {
  const cardContainer = Me.createDOM('div', ['card', 'modal_shadow']);

  const cardIcons = Me.createDOM('div', ['card__icons']);
  const iconAE = Me.createDOM('img', ['card__icon'], {
    'src': './assets/icons/american-express.svg',
    'alt': 'american express'
  });
  const iconVisa = Me.createDOM('img', ['card__icon'], {
    'src': './assets/icons/visa.svg',
    'alt': 'visa'
  });
  const iconMC = Me.createDOM('img', ['card__icon'], {
    'src': './assets/icons/master-card.svg',
    'alt': 'Mastercard'
  });
  const iconMaestro = Me.createDOM('img', ['card__icon'], {
    'src': './assets/icons/maestro.svg',
    'alt': 'maestro'
  });

  const iconCard = Me.createDOM('img', ['card__icon', 'card__icon_card'], {
    'src': './assets/icons/credit-card.svg',
    'alt': 'credit card icon'
  });

  const cardNumber = Me.createDOM('input', ['form__input', 'form__input_text', 'modal__form-input', 'modal__form-input_number', 'card__input', 'card__input_number'], {
    'name': 'cardNumber',
    'type': 'number',
    'id': 'cardNumber',
    'required': 'true',
    'placeholder': 'Card Number',
    'max': '9999999999999999'
  });
  const cardDate = Me.createDOM('input', ['form__input', 'form__input_text', 'modal__form-input', 'modal__form-input_text', 'card__input', 'card__input_date'], {
    'name': 'cardDate',
    'type': 'text',
    'id': 'cardDate',
    'required': 'true',
    'placeholder': 'MM / YY'
  });
  const cardCVC = Me.createDOM('input', ['form__input', 'form__input_text', 'modal__form-input', 'modal__form-input_number', 'card__input', 'card__input_cvc'], {
    'name': 'cardCVC',
    'type': 'number',
    'id': 'cardCVC',
    'required': 'true',
    'placeholder': 'CVC',
    'max': '999'
  });

  Me.appendChildren(cardIcons, [iconAE, iconVisa, iconMC, iconMaestro]);
  Me.appendChildren(cardContainer, [cardIcons, iconCard, cardNumber, cardDate, cardCVC]);

  return cardContainer;
}

const createDonateForm = () => {
  const form = Me.createDOM('form', ['form', 'modal__form', 'modal__form_donate', 'width-100'], {
    'action': ''
  });

  const selectLabel = Me.createDOM('label', ['form__label', 'modal__form-label'], {
    'for': 'selectAnimals',
  });
  selectLabel.innerText = 'Choose an animal';

  const selectAnimals = createAnimalsSelect();

  const paymentsLabel = Me.createDOM('label', ['form__label', 'modal__form-label', 'modal__form-label_payments'], {
    'for': 'subscription',
  });
  paymentsLabel.innerText = 'Payments';
  const payments = createPaymentsBtns();

  const nameLabel = Me.createDOM('label', ['form__label', 'modal__form-label'], {
    'for': 'contactName',
  });
  nameLabel.innerText = 'Your name';
  const nameInput = Me.createDOM('input', ['form__input', 'form__input_name', 'modal__form-input', 'modal__form-input_text', 'modal_shadow'], {
    'name': 'name',
    'type': 'text',
    'id': 'contactName',
    'required': 'true'
  });

  const emailLabel = Me.createDOM('label', ['form__label', 'modal__form-label'], {
    'for': 'contactEmail'
  });
  emailLabel.innerText = 'Your Email';
  const emailInput = Me.createDOM('input', ['form__input', 'form__input_email', 'modal__form-input', 'modal__form-input_email', 'modal_shadow'], {
    'name': 'email',
    'type': 'text',
    'id': 'contactEmail',
    'required': 'true'
  });

  const card = createCard();

  const submitBtn = Me.createDOM('input', ['form__input', 'form__input_submit', 'modal__form-input', 'modal__form-input_submit', 'modal_shadow'], {
    'type': 'submit',
    'value': 'send'
  });

  const paymentProtected = Me.createDOM('p', ['modal__text', 'modal__text_protected']);
  const iconShopBag = Me.createDOM('img', ['modal__icon', 'modal__icon_shop-bag'], {
    'src': './assets/icons/shop-bag.svg',
    'alt': 'shop bag'
  });
  Me.appendChildren(paymentProtected, [iconShopBag, 'Your payment is protected']);

  Me.appendChildren(form, [selectLabel, selectAnimals, paymentsLabel, payments, nameLabel, nameInput, emailLabel, emailInput, card, submitBtn, paymentProtected]);

  return form;
}

const background = Me.createDOM('div', ['modal__background', 'flex', 'flex-center']);
const window = Me.createDOM('div', ['modal', 'modal_donate']);
const windowTitle = Me.createDOM('h2', ['h2', 'modal__title', 'modal__title_donate']);
windowTitle.innerText = 'Donate to volunteers';
const windowSubtitle = Me.createDOM('p', ['modal__subtitle', 'roboto']);
windowSubtitle.innerText = 'Support your favourite animals. It is as simple as buying a cup of coffee.';
const windowForm = createDonateForm();

background.appendChild(window);
background.addEventListener('mousedown', (e) => {
  e.target.addEventListener('mouseup', hide);
});

Me.appendChildren(window, [windowTitle, windowSubtitle, windowForm]);

export default hookEvents;