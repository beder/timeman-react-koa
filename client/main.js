import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
    return state;
  }
}

const store = createStore(counter, 0,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

const render = () => {
  ReactDOM.render(
    <App
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }
    />,
    document.getElementById('app'))
}

store.subscribe(render);
render();
