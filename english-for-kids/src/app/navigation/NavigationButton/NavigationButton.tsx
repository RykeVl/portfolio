import React from 'react';
import { NAVIGATION, NavigationProp, TEST_STATES } from '../../Shared 🍌/Constants';
import { useGameStateContext } from '../../Shared 🍌/GameStateContext';
import { useTestStateContext } from '../../Shared 🍌/TestStateContext';

interface LinkProp extends NavigationProp {
  linkNumber: number;
}

export default function NavigationButton({ setNavigation, linkNumber }: LinkProp) {
  type NavigationType = keyof typeof NAVIGATION;
  const category = NAVIGATION[linkNumber];
  const navLink = NAVIGATION[category as NavigationType];
  const { gameState } = useGameStateContext();
  const { setTestState } = useTestStateContext();

  const onClick = React.useCallback(() => {
    const history = document.querySelector('.history-showcase');
    history?.dispatchEvent(new CustomEvent('hide')); // TODO: remove custom event and use state
    setNavigation(navLink);
    setTestState(gameState ? TEST_STATES.START : TEST_STATES.INACTIVE);
  }, [navLink, gameState]);

  return (
    <li>
      <button type="button" className="nav-btn" onClick={onClick}>
        {category}
      </button>
    </li>
  );
}
