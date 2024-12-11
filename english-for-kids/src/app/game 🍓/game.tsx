/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { CATEGORIES_ARRAYS, CATEGORIES_ARRAYS_TYPES } from '../Shared 🍌/CategoriesObject';
import { useGameStateContext } from '../Shared 🍌/GameStateContext';
import GameState from './GameState/GameState';
import GameCard from './GameCard/GameCard';
import StartTestBtn from './StartTestBtn/StartTestBtn';
import './Game.scss';
import { NAVIGATION, TEST_STATES } from '../Shared 🍌/Constants';
import { useTestStateContext } from '../Shared 🍌/TestStateContext';
import { testVariablesContext, TestVariablesInterface } from '../Shared 🍌/TestVariables';
import Success from './TestResults/TestSuccess';
import Failure from './TestResults/TestFailure';

interface GameProp {
  category: CATEGORIES_ARRAYS_TYPES,
  setNavigation: (navigation: NAVIGATION) => void;
}

export default function Game({ category, setNavigation }: GameProp) {
  const cardIndexes = [0, 1, 2, 3, 4, 5, 6, 7];
  const { gameState } = useGameStateContext();
  const { testState, setTestState } = useTestStateContext();
  const [testVariables, setTestVariables] = React.useState({
    answersHistory: [],
    cardsArray: cardIndexes,
    currentCardIndex: 0,
  } as TestVariablesInterface);

  const bottomInners = gameState ? <StartTestBtn /> : '';

  if (testState !== TEST_STATES.SUCCESSFUL
    && testState !== TEST_STATES.FAILURE) {
    return (

      <testVariablesContext.Provider value={{ testVariables, setTestVariables }}>
        <div className="game-layout">
          <audio className="success-sound" src="./sound/success.m4a" />
          <audio className="failure-sound" src="./sound/failure.m4a" />
          <audio className="test-success-sound" src="./sound/testSuccess.m4a" />
          <audio className="test-failure-sound" src="./sound/testFailure.m4a" />
          <GameState />
          <div className="main-block">
            <ul className="game-cards">
              {cardIndexes.map((item) => {
                const key = CATEGORIES_ARRAYS[category][item];
                return <GameCard category={category} number={item} key={key} />;
              })}
            </ul>
          </div>
          <div className="bottom-block">
            {bottomInners }
          </div>
        </div>
      </testVariablesContext.Provider>
    );
  } if (testState === TEST_STATES.SUCCESSFUL) {
    setTimeout(() => {
      setNavigation(NAVIGATION.HOME);
      setTestState(TEST_STATES.INACTIVE);
    }, 3000);
    return <Success />;
  } if (testState === TEST_STATES.FAILURE) {
    setTimeout(() => {
      setTestState(TEST_STATES.INACTIVE);
      setNavigation(NAVIGATION.HOME);
    }, 3000);
    return <Failure />;
  }
  return <h2>something wrong</h2>;
}
