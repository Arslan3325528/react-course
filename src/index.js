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


//! 5 - Рендер Вкладених JSX-елементів 
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

const data = {
  "id": "id-1",
  "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  "title": "Feathers. Art abstract",
  "price": 500,
  "author": {
    "tag": "ractapopulous",
    "url": "https://pixabay.com/users/ractapopulous-24766/"
  },
  "quantity": 10
};

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