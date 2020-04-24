// @flow strict

import React from 'react';
import { render } from 'react-dom';

import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { Deal } from './components/Deal/Deal';

const rootElement = document.getElementById('App');

if (rootElement) {
  render(
    <div>
      <GlobalStyle />
      <Deal />
    </div>,
    rootElement
  );
} else {
  throw TypeError('Application not found!');
}
