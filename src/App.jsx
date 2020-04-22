// @flow strict

import React from 'react';
import { render } from 'react-dom';
import { DealCard } from './components/DealCard/DealCard';

const rootElement = document.getElementById('App');

if (rootElement) {
  render(
    <div>
        <DealCard title="Sports Car" />
    </div>,
    rootElement
  );
} else {
  throw TypeError('Application not found!');
}
