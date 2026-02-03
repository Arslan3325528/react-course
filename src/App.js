import './App.css';

import Section from './components/Section';
//? Paintings
import PaintingList from './components/PaintingList';
// import Painting from "./components/Painting";
import paintings from './json/paintings.json';


//? Planes
import PlanesList from './components/PlanesList';
// import Planes from "./components/Planes";
import planes from './json/planes.json';


//!💚 Для відображення локальних зображень з http://localhost:3001/react-course та https://arslan3325528.github.io/react-course/
// import img1 from './images/planes-actual/a-10.jpg';
// import img2 from './images/planes-actual/b-2-comp.jpg';
// import img3 from './images/planes-actual/f-22-comp.jpg';


//todo: var.1
// export default function App() {
//   //! +++ Рендер за умовою:
//   // const isOnline = true;
//   const isOnline = false;
//   // return (<div>
//   //   {isOnline && "ONline"}
//   //   {isOnline ? "ONline" : "OFFline"}

//   //   {false}
//   //   {null}
//   //   {undefined}
//   // </div>
//   // );
//   //! ____________________
//   return (
//     <div>
//       {/* //? Paintings */}
//       <Painting
//         // url={paintings[0].url}
//         title={paintings[0].title}
//         // author={paintings[0].author.tag}
//         profileUrl={paintings[0].author.url}
//         price={paintings[0].price}
//         // price="100" //! контроль propTypes
//         quantity={paintings[0].quantity}
//       />
//       {/* //? Paintings */}
//       <Painting
//         url={paintings[1].url}
//         title={paintings[1].title}
//         author={paintings[1].author.tag}
//         profileUrl={paintings[1].author.url}
//         price={paintings[1].price}
//         quantity={paintings[1].quantity}
//       />
//       {/* //? Paintings */}
//       <Painting
//         url={paintings[2].url}
//         title={paintings[2].title}
//         author={paintings[2].author.tag}
//         profileUrl={paintings[2].author.url}
//         price={paintings[2].price}
//         quantity={paintings[2].quantity}
//       />
//       {/* //? Planes */}
//       <Planes
//         key={planes[1].id}
//         urlMain={planes[1].url.main}
//         urlPromotional={planes[1].url.promotional}
//         // urlActual={planes[1].url.actual}
//         urlActual={img2} //!💚 
//         nameBrief={planes[1].name.brief}
//         nameFull={planes[1].name.full}
//         nickname={planes[1].name.nickname}
//         year={planes[1].info.year}
//         country={planes[1].info.country}
//         type={planes[1].info.type}
//         price={planes[1].info.price}
//         description={planes[1].info.description}
//       />
//     </div>
//   );
// };


//! +++ Приклад рендеру за умовою:
//todo: var.1.1
// export default function App() {
//   const isOnline = true; //? Painting
//   // const isOnline = false; //? Planes
//   return (
//     <div>
//       {isOnline
//         ?
//         < Painting
//           url={paintings[0].url}
//           title={paintings[0].title}
//           author={paintings[0].author.tag}
//           profileUrl={paintings[0].author.url}
//           price={paintings[0].price}
//           quantity={paintings[0].quantity}
//         />
//         :
//         <Planes
//           key={planes[1].id}
//           urlMain={planes[1].url.main}
//           urlPromotional={planes[1].url.promotional}
//           // urlActual={planes[1].url.actual}
//           urlActual={img2} //!💚 
//           nameBrief={planes[1].name.brief}
//           nameFull={planes[1].name.full}
//           nickname={planes[1].name.nickname}
//           year={planes[1].info.year}
//           country={planes[1].info.country}
//           type={planes[1].info.type}
//           price={planes[1].info.price}
//           description={planes[1].info.description}
//         />
//       }
//     </div>
//   );
// };

//? Paintings
//todo: var.2 "Колекції"
// export default function App() {
//   return (
//     <div>
//       {/* [1,2,3,4,5]
//       <br/>
//       {[1, 2, 3, 4, 5]}
//       <br />
//       {[1, 2, 3, 4, 5].map(el => <div>{el}</div>)}
//       <br /> */}
//       {paintings.map(painting =>
//         <Painting
//           key={painting.id}
//           url={painting.url}
//           title={painting.title}
//           author={painting.author.tag}
//           profileUrl={painting.author.url}
//           price={painting.price}
//           quantity={painting.quantity}
//         />
//       )}
//     </div>
//   );
// };

//todo: var.2 "Колекції"
export default function App() {
  return (
    <div>
      {/* //? Paintings */}
      {/* <Section title="Колекція картин">gdfgdfgfd</Section > */}
      {/* <PaintingList items={paintings}/> */}
      <Section title="Колекція картин">
        <PaintingList items={paintings} />
      </Section >

      {/* <Section /> */}

      {/* //? Planes */}
      <Section title="Колекція моделей літаків">
        <PlanesList items={planes} />
      </Section >
    </div>
  );
};
