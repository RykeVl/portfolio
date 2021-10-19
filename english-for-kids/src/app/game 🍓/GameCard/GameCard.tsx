/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { CATEGORIES_ARRAYS_TYPES } from '../../Shared 🍌/CategoriesObject';
import { useGameStateContext } from '../../Shared 🍌/GameStateContext';
import PracticeCard from './PracticeCard/PracticeCard';
import TestCard from './TestCard/TestCard';
import './GameCard.scss';

interface GameCardProp {
  category: CATEGORIES_ARRAYS_TYPES,
  number: number
}

export default function Card({ category, number }: GameCardProp) {
  const { gameState } = useGameStateContext();

  return (
    <li className="card-wrapper">
      {gameState
        ? <TestCard category={category} number={number} />
        : <PracticeCard category={category} number={number} />}
    </li>
  );
}
