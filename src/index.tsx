import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './pages';
import GlobalStyle from './utils/globalStyle';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
);
