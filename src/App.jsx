// @flow strict

import React from 'react';
import { render } from 'react-dom';

import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { DealCardsDeck } from './components/DealCardsDeck/DealCardsDeck';

const rootElement = document.getElementById('App');

if (rootElement) {
  render(
    <div>
      <GlobalStyle />
      <DealCardsDeck
        showing="antique_auto"
      />
    </div>,
    rootElement
  );
} else {
  throw TypeError('Application not found!');
}
