import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './Hello'
import Card from './components/Card'
import reportWebVitals from './reportWebVitals';
// npm install tachyons
import 'tachyons'
// if not exporting default, need to destructure
// import {robots} from './robots'
// import CardList from './CardList'
import RoboApp from './containers/RoboApp.js'
// ReactDOM.render(
//   <React.StrictMode>
//     {/* <h1>Hello world</h1>
//     <strong>Something is here</strong> */}
//     {/* greeting is a prop */}
//     <Hello greeting={'Hello React Ninja'} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//redux
import {Provider} from 'react-redux';
import { searchRobots, requestRobots } from './reducers';
import {applyMiddleware, createStore, combineReducers} from 'redux';
//377
import {createLogger} from 'redux-logger'
//378
import  thunkMiddleware  from 'redux-thunk';
// create logger that will console.log the prev/next state and action
const logger = createLogger();
//378 use combine reducers middleware to use both reducers
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware, logger))


// pass down store using the Provider component which will pass down store
// too all the components down the RoboApp component tree
ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <div className='tc center'>
        
        <Provider store={store}> <RoboApp  /></Provider>

      </div> 
    {/* <CardList robots={robots}/> */}
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
