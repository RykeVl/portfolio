/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { CATEGORIES_ARRAYS_TYPES } from '../../../Shared 🍌/CategoriesObject';
import { TEST_STATES } from '../../../Shared 🍌/Constants';
import PlayCurrentCardSound from '../../../Shared 🍌/GameFunctions';
import { useTestStateContext } from '../../../Shared 🍌/TestStateContext';
import { useTestVariables } from '../../../Shared 🍌/TestVariables';
import Button from '../../../Shared 🍌/Components/Button';
import './TestCard.scss';

// TODO: STYLES CORRECT AND WRONG

interface GameCardProp {
  category: CATEGORIES_ARRAYS_TYPES,
  number: number
}

export default function TestCard({ category, number }: GameCardProp) {
  const { testState, setTestState } = useTestStateContext();
  const { testVariables, setTestVariables } = useTestVariables();

  const changeVariables = React.useCallback((success: boolean, target: HTMLElement) => {
    // console.log(target);

    if (success) {
      const sound = document.querySelector('.success-sound') as HTMLAudioElement;
      sound.play();
      target.children[0]?.classList.add('correct');
    } else {
      target.children[0]?.classList.add('wrong');
      const sound = document.querySelector('.failure-sound') as HTMLAudioElement;
      sound.play();
      setTimeout(() => {
        target.children[0]?.classList.remove('wrong');
      }, 400);
    }

    const history = [...testVariables.answersHistory];
    history.push(success);
    if (history.length > 14) {
      history.shift();
    }

    setTestVariables({
      cardsArray: testVariables.cardsArray,
      currentCardIndex: testVariables.currentCardIndex + Number(success),
      answersHistory: history,
    });

    setTimeout(() => {
      if (testVariables.currentCardIndex === 7 && success) {
        if (testVariables.answersHistory.includes(false)) {
          const sound = document.querySelector('.test-failure-sound') as HTMLAudioElement;
          sound.play();
          setTestState(TEST_STATES.FAILURE);
        } else {
          const sound = document.querySelector('.test-success-sound') as HTMLAudioElement;
          sound.play();
          setTestState(TEST_STATES.SUCCESSFUL);
        }
      } else if (success) {
        PlayCurrentCardSound(testVariables.cardsArray[testVariables.currentCardIndex + 1]);
      }
    }, 400);
  }, [testVariables]);

  const handleClick = React.useCallback((e: React.MouseEvent) => {
    if (testState === TEST_STATES.START) {
      return;
    }

    const target = e.currentTarget as HTMLElement;

    if (target.parentElement!.classList.contains('correct')) {
      return;
    }

    if (target.children[0].classList.contains(`card-${number}`)
      && number === testVariables.cardsArray[testVariables.currentCardIndex]) {
      changeVariables(true, target);
    } else {
      changeVariables(false, target);
    }
  }, [testState, changeVariables]);

  return (
    <Button onClick={handleClick}>
      <div className={`card test-card card-${number}`}>
        <audio className={`sound-${number}`} src={`${category.toLowerCase()}/sound/${number}.mp3`} />

        <div className="game-card">
          <div className="image-container">
            <img src={`${category.toLowerCase()}/icons/${number}.png`} alt="icon" />
          </div>
        </div>
      </div>
    </Button>
  );
}
