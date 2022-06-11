import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';
import './index.css';

const prepare = async (): Promise<void> => {
  if (import.meta.env.DEV) {
    //@ts-ignore
    const { worker } = await import('./mocks/browser');
    worker.start();
  }
};

// eslint-disable-next-line promise/catch-or-return, promise/always-return
prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
