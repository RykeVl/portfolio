import React from 'react';
import Categories from '../Categories/Categories';
import Game from '../Game 🍓/Game';
import { NAVIGATION } from '../Shared 🍌/Constants';

interface LayoutFactoryProp {
  navigation: NAVIGATION;
  setNavigation: (navigation: NAVIGATION) => void;
}

export default function LayoutFactory({ navigation, setNavigation }: LayoutFactoryProp) {
  switch (navigation) {
    case NAVIGATION.HOME:
      return <Categories setNavigation={setNavigation} />;
    case NAVIGATION.ANIMALS:
      return <Game category="ANIMALS" setNavigation={setNavigation} />;
    case NAVIGATION.ACTIONS:
      return <Game category="ACTIONS" setNavigation={setNavigation} />;
    case NAVIGATION.CLOTHES:
      return <Game category="CLOTHES" setNavigation={setNavigation} />;
    case NAVIGATION.MOOD:
      return <Game category="MOOD" setNavigation={setNavigation} />;
    case NAVIGATION.FURNITURE:
      return <Game category="FURNITURE" setNavigation={setNavigation} />;
    case NAVIGATION.GADGETS:
      return <Game category="GADGETS" setNavigation={setNavigation} />;
    case NAVIGATION.COLORS:
      return <Game category="COLORS" setNavigation={setNavigation} />;
    case NAVIGATION.WEATHER:
      return <Game category="WEATHER" setNavigation={setNavigation} />;
      // case NAVIGATION.STATISTICS:
      //   return <Game category="STATISTICS" />;

    default:
      return <h2>Error</h2>;
  }
}
