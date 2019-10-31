import React from 'react';
import { hydrate, render } from 'react-dom';
import Ordercomplete from '../pages/OrdercompletePage';

if (window)
  render(
    <Ordercomplete data={window.__DATA__} />,
    document.getElementById('app')
  );
