import _ from '../shared/helpers';
import './navigation.scss';

const garageLink = () => {
  const li = _.createDOM('li', ['nav-li']);
  const a = <HTMLLinkElement>_.createDOM('a', ['nav-a'], { href: '#garage' });
  a.innerText = 'Garage';

  li.appendChild(a);

  return li;
};

const winnersLink = () => {
  const li = _.createDOM('li', ['nav-li']);
  const a = <HTMLLinkElement>_.createDOM('a', ['nav-a'], { href: '#winners' });
  a.innerText = 'Winners';

  li.appendChild(a);

  return li;
};

const renderNavigation = () => {
  const nav = _.createDOM('nav', ['nav']);
  const ul = _.createDOM('ul', ['nav-ul']);

  ul.appendChild(garageLink());
  ul.appendChild(winnersLink());

  nav.appendChild(ul);

  return nav;
};

export default renderNavigation;
