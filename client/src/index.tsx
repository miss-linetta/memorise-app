import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware, compose } from 'redux';
import './index.css';

import { reducers } from './reducers';

import App from './App';
import thunk from 'redux-thunk';
import PageLayout from './components/common/page-layout';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PageLayout>
        <App />
      </PageLayout>
    </Provider>
  </BrowserRouter>
);
