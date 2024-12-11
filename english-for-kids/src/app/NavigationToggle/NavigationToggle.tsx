import React from 'react';
import './NavigationToggle.scss';

export default function NavigationToggle() {
  function navigationToggle(e: React.MouseEvent) {
    const target = e.currentTarget as HTMLButtonElement;
    target.classList.toggle('active');
    const nav = document.querySelector('.navigation');
    nav?.classList.toggle('hidden-nav');
    const navBackground = document.querySelector('.nav-background');
    navBackground?.classList.toggle('hidden-nav');
  }

  return (
    <button type="button" onClick={navigationToggle} className="navigation-toggle">
      <img src="./icons/burger.png" alt="toggle nav" />
    </button>
  );
}
