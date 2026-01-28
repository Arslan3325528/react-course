// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//? Paintings
import Painting from "./components/Painting";
import paintings from './json/paintings.json';
// console.log("Painting:", Painting);
// console.log("paintings:", paintings);

//? Planes
import Planes from "./components/Planes";
import planes from './json/planes.json';
// console.log("Planes:", Planes);
// console.log("planes:", planes);


//todo: var.1
export default function App() {
  return (
    <div>
      {/* //? Paintings */}
      <Painting
        // url={paintings[0].url}
        title={paintings[0].title}
        // author={paintings[0].author.tag}
        profileUrl={paintings[0].author.url}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
      />
      {/* //? Paintings */}
      <Painting
        url={paintings[1].url}
        title={paintings[1].title}
        author={paintings[1].author.tag}
        profileUrl={paintings[1].author.url}
        price={paintings[1].price}
        quantity={paintings[1].quantity}
      />
      {/* //? Paintings */}
      <Painting
        url={paintings[2].url}
        title={paintings[2].title}
        author={paintings[2].author.tag}
        profileUrl={paintings[2].author.url}
        price={paintings[2].price}
        quantity={paintings[2].quantity}
      />
      {/* //? Planes */}
      {/* <Planes
        key={planes[1].id}
        urlMain={planes[1].url.main}
        urlPromotional={planes[1].url.promotional}
        urlActual={planes[1].url.actual}
        nameBrief={planes[1].name.brief}
        nameFull={planes[1].name.full}
        nickname={planes[1].name.nickname}
        year={planes[1].info.year}
        country={planes[1].info.country}
        type={planes[1].info.type}
        price={planes[1].info.price}
        description={planes[1].info.description}
      /> */}
    </div>
  );
};

//? Paintings
//todo: var.2
// export default function App() {
//   return (
//     <div>
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
