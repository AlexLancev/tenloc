import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';

import App from './App';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/index.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
