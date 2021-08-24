// import React from 'react';
// import ReactDOM from 'react-dom';


// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import the React-Redux Provider
import { Provider } from "react-redux";
// import store from our main redux file
import store from "./redux/store";



import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
        {/*
      Wrap <App /> component with the React-Redux <Provider> and pass
      the imported store as a prop
    */}
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
  rootElement
);
