/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Button from '../../Shared 🍌/Components/Button';
import './CategoryCard.scss';

interface CardProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  name: string
}

export default function CategoryCard({ onClick, name }: CardProps) {
  const imageUrl = `./category/${name.toString().toLowerCase()}.png`;

  return (

    <li className="category-card">
      <Button onClick={onClick}>
        <div className="category-image-block">
          <img src={imageUrl} alt="category" />
        </div>

        <div className="category-text">
          <h4>{name}</h4>
        </div>
      </Button>
    </li>
  );
}
