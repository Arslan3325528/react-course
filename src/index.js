// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// ---------------------------------------------------------


import React from 'react'; //! 1 - React-елементи
import ReactDOM from 'react-dom/client'; //! 2 - Render React-елемента

//! 1 - React-елементи
// const element = React.createElement("div");

// const element = React.createElement("div", { a: 5, b: 10 }, "Привет мир!");

// const element = React.createElement(
//   "div",
//   { a: 5, b: 10 },
//   "Привет",
//   " ",
//   "мир!"
// );

const element = React.createElement("div", {
  a: 5,
  b: 10,
  children: ["Привет", " ", "мир!"]
});

console.log("element:", element);


//! 2 - Render React-елемента

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);