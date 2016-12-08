import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {createStore} from 'redux';

const counter = function (state={number:0},action){
  switch (action.type) {
    case 'INCREMENT':
      return {number:state.number + 1};
    case 'DECREMENT':
      return {number:state.number - 1};
    default:
      return state;
  }
};

let store = createStore(counter);

let getCurrentState = () => {
  return store.getState().number;
}

const increment = () => {
  store.dispatch({
    type: 'INCREMENT'
  });
};

const decrement = () => {
  store.dispatch({
    type: 'DECREMENT'
  });
};


const render = () => {
  ReactDOM.render(
    <App increment={increment}
         decrement={decrement}
         value={getCurrentState()}
    />,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);
