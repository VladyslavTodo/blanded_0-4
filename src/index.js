import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// import { App } from 'components';
import App from './components/App/App';
import { GlobalStyles, theme } from 'styles';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        {' '}
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles} />
          <App />
        </ThemeProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
