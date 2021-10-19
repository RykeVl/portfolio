import React from 'react';
import './StartTestBtn.scss';
import { TEST_STATES } from '../../Shared 🍌/Constants';
import { useTestStateContext } from '../../Shared 🍌/TestStateContext';
import { useTestVariables } from '../../Shared 🍌/TestVariables';
import PlayCurrentCardSound from '../../Shared 🍌/GameFunctions';

export default function StartTestBtn() {
  let button: JSX.Element;
  const { testState, setTestState } = useTestStateContext();
  const { testVariables, setTestVariables } = useTestVariables();

  function startTest() {
    const history = document.querySelector('.history-showcase'); // TODO: REMOVE QUERY SELECTOR
    history?.dispatchEvent(new CustomEvent('show'));

    function shuffle(array: Array<number>) {
      array.sort(() => Math.random() - 0.5);
      return array;
    }

    setTestState(TEST_STATES.IN_PROCESS);
    setTestVariables({
      cardsArray: shuffle(testVariables.cardsArray),
      currentCardIndex: 0,
      answersHistory: [],
    });

    PlayCurrentCardSound(testVariables.cardsArray[0]);
  }

  function playSound() {
    PlayCurrentCardSound(testVariables.cardsArray[testVariables.currentCardIndex]);
  }

  if (testState === TEST_STATES.START) {
    button = <button type="button" onClick={startTest} className="start-test-btn">Start game</button>;
  } else {
    button = <button type="button" onClick={playSound} className="start-test-btn">Listen again</button>;
  }

  return button;
}
