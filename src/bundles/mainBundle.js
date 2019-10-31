import React from 'react';
import { hydrate, render } from 'react-dom';
import Main from '../pages/MainPage';

if (window)
  render(
    <Main data={window.__DATA__} />,
    document.getElementById('app')
  );
