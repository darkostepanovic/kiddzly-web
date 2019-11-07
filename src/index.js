import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import * as serviceWorker from './serviceWorker';

import store from './redux/configureStore';
import appActions from './redux/global/actions';
import theme from './theme';
import GlobalStyles from './globalStyle';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

window.addEventListener('beforeinstallprompt', e => {
  alert('EVENT OVDE');
  store.dispatch(appActions.APP.HOMESCREEN_PROMPT, e);
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
