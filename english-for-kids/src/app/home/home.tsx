import React from 'react';
import Navigation from '../Navigation/Navigation';
import LayoutFactory from '../Layout/LayoutFactory';
import NavigationToggle from '../NavigationToggle/NavigationToggle';
import './home.scss';

import { NAVIGATION, TEST_STATES } from '../Shared 🍌/Constants';
import { gameStateContext } from '../Shared 🍌/GameStateContext';
import { testStateContext } from '../Shared 🍌/TestStateContext';

export default function Home() {
  const [navigation, setNavigation] = React.useState(NAVIGATION.HOME);
  const [gameState, setGameState] = React.useState(false);
  const [testState, setTestState] = React.useState(TEST_STATES.INACTIVE);

  return (
    <div className="homepage">
      <NavigationToggle />
      <gameStateContext.Provider value={{ gameState, setGameState }}>
        <testStateContext.Provider value={{ testState, setTestState }}>
          <Navigation setNavigation={setNavigation} />
          <LayoutFactory navigation={navigation} setNavigation={setNavigation} />
        </testStateContext.Provider>
      </gameStateContext.Provider>
    </div>
  );
}
