import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

import 'reset-css/reset.css';
import './index.scss';

const root = (
  <div className="root">
    <App />
  </div>
);

ReactDOM.render(root, document.body);
