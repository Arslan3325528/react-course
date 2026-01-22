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
import paintings from './paintings.json' //! 6.1 - Компонент `Painting`
import planes from './planes.json'

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

// const element = React.createElement("div", {
//   a: 5,
//   b: 10,
//   children: ["Привет", " ", "мир!"]
// });

// console.log("element:", element);


//! 2 - Рендер одного React-елемента
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


//! 3 - Рендер кількох React-елементів
// const elem1 = React.createElement("span", { children: "Привет" });
// const elem2 = React.createElement("span", { children: "мир!" });

// //todo: Each child in a list should have a unique "key" prop
// const elem1 = React.createElement("span", { key: "elem-1", children: "Привет" });
// const elem2 = React.createElement("span", { key: "elem-2", children: "мир!" });

// const element = React.createElement("div", {
//   a: 5,
//   b: 10,
//   children: [elem1, " ", elem2]
// });

// console.log("element:", element);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


//! 4 - Рендер JSX-елемента (XML-образний синтаксис)
// const element = React.createElement("div", {
//   a: 5,
//   b: 10,
//   children: "Привет мир!",
// });

// console.log("element:", element);

// const jsxElement = <div>Привет мир</div>
// console.log("jsxElement:", jsxElement);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


//! 5 - Рендер Вкладених JSX-елементів (інтерполяція)
// const elem1 = <span>Привет </span>;
// const elem2 = <span>мир!</span>;

// const element = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log("element:", element);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


//! 6.1 - Компонент `Painting`
// * HTML-розмітка:
// <div>
//   <img src="" alt="" width="480" />
//   <h2></h2>
//   <p>Автор: <a href=""></a></p>
//   <p>Цена: кредитов</p>
//   <p>Доступность: заканчивается или есть в наличии</p>
//   <button type="button">Добавить в корзину</button>
// </div>

//? у одиночних тегів повинен бути обов'язково закриваючий слеш
let painting = (
  <div>
    <img src="" alt="" width="480" />
    <h2></h2>
    <p>Автор: <a href=""></a></p>
    <p>Цена: кредитов</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Добавить в корзину</button>
  </div>
);

let data = {
  "id": "id-1",
  "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  "url1": "https://lh3.googleusercontent.com/pw/AP1GczNs6n74d0t3SgOMv9k5_PsOazCTuNdWwWJw3DA34U2Of-Uua4S3EItO-W0ChLissOAyto7UkYnq20Co_6q-8gjdhL_Cyea1ErpxtOCu8DR7Ea4AFIcJot1Uz3gK2jmuNgWhcjeR0NLgpDxagwu9MmZ8=w924-h727-s-no-gm?authuser=0",
  "url2": "https://lh3.googleusercontent.com/pw/AP1GczNGlg1WrUIrHaldyLzqhtpjcd3ivMq-MuGEBPsz_qYczTWm_l8wJ8eas5nAeRYk3zZs7EzT1tiJa0SnBfFNcM6Lk4C7P1PnyDxBxhVZ0cBBZ3EeB1_NkGx5ntFsODL3iAM6k21UtFPMsax9xWPyh3WI=w938-h950-s-no-gm?authuser=0",
  "url3": "https://lh3.googleusercontent.com/pw/AP1GczPlOJa_nz3Ch08sMU0GWfU3ZsRJsitvgpvb1tBucxFF2I7J89X1JhWGP-7BwF_LdZHkk2kbWWx8msIXr4YId3DiOkbmnLI91WJik0QPR5VmE0QoV1sY8HrOQztzLhCxVro3bA9kO-PGzA0Vt0iOUHIZ=w848-h847-s-no-gm?authuser=0",
  "url4": "https://lh3.googleusercontent.com/pw/AP1GczOOPA6CWmNQnGEW6RH5j_eZyyLrLDfJZKnwAdVgskpMYGAZeXCQy4baC95vob7YfZJlVWtxkKakgFcEIcdFYqMNgMtbs9vUgBN8n-KsQWnK71O837Tcg_pFkAv1sUHOzH_RFXKb0MRC6rWuAEknQ-8S=w937-h962-s-no-gm?authuser=0",
  "url5": "https://lh3.googleusercontent.com/pw/AP1GczMKLc4BcncR6OVS1d8lmOPkBwRxdEhtDfpcEhgxey8Uq8Yjph7qANZZ3nAmMWqgKbrJQllzQ9g0GnZJAB63dc_gor8_XwNrRNdEuntxwk-B7EpmNyHoXBUjn2KY8HaSMMIMI6WqzmSetHeTSls61FUs=w908-h776-s-no-gm?authuser=0",
  "url6": "https://lh3.googleusercontent.com/pw/AP1GczNyRJlWO2ki4tSpbCXhowMOcD6DCnUOqdDbrrMuObFy8W7mv6uKdL8K_HUO2N7OlNQaN2U5BDQTuatfMaaVjuhD9s9rJYSCq_tZQAxaQ-ydFSJ8EwF8rPsFPoZvJXyI60CKHc_YSo4y17xUPf0yiSr_=w913-h847-s-no-gm?authuser=0",
  "url7": "https://lh3.googleusercontent.com/pw/AP1GczN2lll11uaDdq8QzGve7tLHZ1oPqLtovR7IYe6EDuyNxb8EfpHVI7TI62USXr7EF9QuBJVgMpA8OW9g5FezEasyHHk7WPaLe4phsI0A7Vsk6Fv482jFXJjhn4lp3vaa8gI_-UTnRMG7l0ZsrYctks8U=w738-h708-s-no-gm?authuser=0",
  "url8": "https://lh3.googleusercontent.com/pw/AP1GczOMavfHaYVT4eTIeMRu7Nf0sCXN6W5n2fjjpna_xFwpNWe2F4smHwIEGN_HY2aDibjQrABBD7JhPCvrZHtfN2jOP4ilY-rD94SLpTB62YeBBOLrVzKEQ7y-ck57_vHkvteGiAG23FrQYXA5mQeriSIx=w916-h907-s-no-gm?authuser=0",
  "url9": "https://lh3.googleusercontent.com/pw/AP1GczMW9bQPJS-5H0JL5TtRZ7ZEpl1nxf8P1-KGsHff6BkWUFMO7vxLBrhlhQdbNDZQJl7W0lrUZtUf_RSSU6bNhQPTQ7W2qntlaabchF_RK2BZKKbygFUKP8KmlP6Q2yn8RCVQhmB0emkPoilDP5sRqre7=w944-h911-s-no-gm?authuser=0",
  "url10": "https://lh3.googleusercontent.com/pw/AP1GczNBzI4pES1NPiwOlSVtrOB8HI05jTeAmviNH4z9LxzgOMyt0x3kbW037JCesGSWonYwro6_zNTdpRSOs_qO4PGaReHNHeQvu5LdEnwCoroJbKn2DTCXR_G6tj0leAJXOK1wgyTosj4d4of3Vh2yfGPO=w938-h986-s-no-gm?authuser=0",
  "url11": "https://lh3.googleusercontent.com/pw/AP1GczMtY4nQTvqUvzjmYtxqfDj7u1ncZYyvpoy3ES_4xaIF6tKXLK5tRMfCzm88lHcLuhmRFZaceL8y_dvI_J-3Yd4bupWnF9O23D8kAuu8TwZNJzSxouDVFLmDfu4yTld_dBasPhG0OqNrPu-jZRMwcZE8=w931-h929-s-no-gm?authuser=0",

  "title": "Feathers. Art abstract",
  "price": 500,
  "author": {
    "tag": "ractapopulous",
    "url": "https://pixabay.com/users/ractapopulous-24766/"
  },
  "quantity": 10
};

//! 6.2 - Компонент `Painting` з json
data = paintings[0];
// data = paintings[1];
// data = paintings[2];

// data = planes[1];

painting = (
  <div>
    <img src={data.url} alt={data.title} width="480" />
    <h2>{data.title}</h2>
    <p>Автор: <a href={data.author.url}>{data.author.tag}</a></p>
    <p>Цена: {data.price} кредитов</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Добавить в корзину</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(painting);


