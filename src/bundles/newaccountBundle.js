import React from 'react';
import { hydrate, render } from 'react-dom';
import Newaccount from '../pages/NewaccountPage';

if (window)
  render(
    <Newaccount data={window.__DATA__} />,
    document.getElementById('app')
  );
