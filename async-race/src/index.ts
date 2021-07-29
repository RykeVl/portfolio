import Router from './shared/router';
import _ from './shared/helpers';
import renderNavigation from './renders/navigationRender';
import './styles/reset.css';
import './styles/main.scss';

const root = <HTMLDivElement>_.createDOM('div', ['root']);
_.body.appendChild(root);

root.appendChild(renderNavigation());
const layout = <HTMLDivElement>_.createDOM('div', ['layout']);
root.appendChild(layout);

Router(layout);
