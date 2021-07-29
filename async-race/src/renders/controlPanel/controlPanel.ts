import _ from '../../shared/helpers';
import addUpdateClick from './eventListeners/updateClick';
import './controlPanel.scss';
import addCreateClick from './eventListeners/createClick';
import addGenerateClick from './eventListeners/generateClick';
import addRaceClick from './eventListeners/raceClick';
import addResetClick from './eventListeners/resetClick';

const renderForm = (name: string) => {
  const form = _.createDOM('form', [`${name}-form`, 'form']);
  const nameAttributes = {
    type: 'text',
    placeholder: 'name',
    required: true,
  };
  const nameInput = _.createDOM('input', [`${name}-input-text`, 'input-text', 'input'], nameAttributes);
  const colorInput = _.createDOM('input', [`${name}-input-color`, 'input-color', 'input'], { type: 'color' });
  const button = _.createDOM('button', [`${name}-button`, 'form-button', 'button']);
  button.innerText = `${name}`;

  _.appendChildren(form, [nameInput, colorInput, button]);

  return form;
};

const renderControlButtons = () => {
  const buttons = _.createDOM('div', ['control-buttons']);
  const raceButton = <HTMLButtonElement>_.createDOM('button', ['race-button', 'control-button', 'button']);
  raceButton.innerText = 'race';
  addRaceClick(raceButton);

  const resetButton = <HTMLButtonElement>_.createDOM('button', ['reset-button', 'control-button', 'button'], { disabled: 'true' });
  resetButton.innerText = 'reset';
  addResetClick(resetButton);

  const generateButton = <HTMLButtonElement>_.createDOM('button', ['generate-button', 'control-button', 'button']);
  generateButton.innerText = 'generate';
  addGenerateClick(generateButton);

  _.appendChildren(buttons, [raceButton, resetButton, generateButton]);

  return buttons;
};

const renderControlPanel = () => {
  const panel = _.createDOM('div', ['control-panel']);
  const createForm = <HTMLFormElement>renderForm('create');
  addCreateClick(createForm);
  const updateForm = <HTMLFormElement>renderForm('update');
  addUpdateClick(updateForm);
  const controlButtons = renderControlButtons();

  _.appendChildren(panel, [createForm, updateForm, controlButtons]);

  return panel;
};

export default renderControlPanel;
