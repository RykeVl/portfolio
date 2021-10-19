/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { CATEGORIES_ARRAYS, CATEGORIES_ARRAYS_TRANSLATION, CATEGORIES_ARRAYS_TYPES } from '../../../Shared 🍌/CategoriesObject';
import Button from '../../../Shared 🍌/Components/Button';
import './PracticeCard.scss';

interface GameCardProp {
  category: CATEGORIES_ARRAYS_TYPES,
  number: number
}

export default function PracticeCard({ category, number }: GameCardProp) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const onToggle = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    cardRef.current?.classList.add('flipped');
    e.stopPropagation();
  }, []);

  const playSound = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
    const child = e.currentTarget.children[0];

    if (child.classList.contains('practice-card')) {
      audioRef.current?.play();
    }
  }, []);

  const restoreCard = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement;
    target.children[0].classList.remove('flipped');
  }, []);

  return (
    <Button onClick={playSound} onMouseLeave={restoreCard}>
      <div ref={cardRef} className="card practice-card">
        <audio ref={audioRef} className={`sound-${number}`} src={`${category.toLowerCase()}/sound/${number}.mp3`} />

        <div className="card__translate">
          <div className="image-container">
            <img src={`${category.toLowerCase()}/icons/${number}.png`} alt="icon" />
          </div>
          <div className="description-container">
            <div className="text-container">
              <h4>{CATEGORIES_ARRAYS_TRANSLATION[category][number]}</h4>
            </div>
          </div>
        </div>

        <div className="card__word">
          <div className="image-container">
            <img src={`${category.toLowerCase()}/icons/${number}.png`} alt="icon" />
          </div>
          <div className="description-container">
            <div className="text-container">
              <h4>{CATEGORIES_ARRAYS[category][number]}</h4>
            </div>
            <div className="button-container">
              <Button onClick={onToggle}>
                <img className="flip-image" src="./icons/flip.png" alt="flip" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Button>
  );
}
