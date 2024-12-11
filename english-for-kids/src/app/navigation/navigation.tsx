/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { NAVIGATION, NavigationProp } from '../Shared 🍌/Constants';
import NavigationButton from './NavigationButton/NavigationButton';
import './Navigation.scss';

export default function Navigation({ setNavigation }: NavigationProp) {
  const links = [];
  const linksNumber = Object.values(NAVIGATION).length / 2;
  for (let i = 0; i < linksNumber; i += 1) {
    links.push(i);
  }

  function toggleNavigation(e: React.MouseEvent) {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains('nav-background')
      || target.classList.contains('nav-btn')) {
      const navBackground = document.querySelector('.nav-background'); // TODO: try to remove querySelector
      navBackground?.classList.add('hidden-nav');
      const nav = document.querySelector('.navigation');
      nav?.classList.add('hidden-nav');
      const toggle = document.querySelector('.navigation-toggle');
      toggle?.classList.remove('active');
    }
  }

  return (
    <div onClick={toggleNavigation} className="nav-background hidden-nav">
      <div className="navigation hidden-nav">
        <nav>
          <ul>
            {links.map((e: number) => <NavigationButton setNavigation={setNavigation} linkNumber={e} key={e} />)}
          </ul>
        </nav>
      </div>
    </div>
  );
}
