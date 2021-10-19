import React from 'react';
import { NAVIGATION, NavigationProp } from '../Shared 🍌/Constants';
import CategoryCard from './CategoryCard/CategoryCard';
import './Categories.scss';

export default function Categories({ setNavigation }: NavigationProp) {
  return (
    <div className="categories">
      <ul>
        <CategoryCard onClick={() => setNavigation(NAVIGATION.ANIMALS)} name="ANIMALS" />
        <CategoryCard onClick={() => setNavigation(NAVIGATION.ACTIONS)} name="ACTIONS" />
        <CategoryCard onClick={() => setNavigation(NAVIGATION.CLOTHES)} name="CLOTHES" />
        <CategoryCard onClick={() => setNavigation(NAVIGATION.MOOD)} name="MOOD" />
        <CategoryCard onClick={() => setNavigation(NAVIGATION.FURNITURE)} name="FURNITURE" />
        <CategoryCard onClick={() => setNavigation(NAVIGATION.GADGETS)} name="GADGETS" />
        <CategoryCard onClick={() => setNavigation(NAVIGATION.COLORS)} name="COLORS" />
        <CategoryCard onClick={() => setNavigation(NAVIGATION.WEATHER)} name="WEATHER" />
      </ul>
    </div>
  );
}
