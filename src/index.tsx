import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

declare var module: { hot: any };
declare var require: any;

import App from './containers/App';

const appElem = document.getElementById('app');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  appElem
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      appElem
    );
  });
}
