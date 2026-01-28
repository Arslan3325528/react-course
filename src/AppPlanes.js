
//? Planes
import Planes from "./components/Planes";
import planes from './json/planes.json';
// console.log("Planes:", Planes);
// console.log("planes:", planes);

//? Paintings
//todo: var.1
// export default function App() {
//   return (
//     <div>
//       <Painting
//         // url={paintings[0].url}
//         title={paintings[0].title}
//         // author={paintings[0].author.tag}
//         profileUrl={paintings[0].author.url}
//         price={paintings[0].price}
//         quantity={paintings[0].quantity}
//       />

//       <Painting
//         url={paintings[1].url}
//         title={paintings[1].title}
//         author={paintings[1].author.tag}
//         profileUrl={paintings[1].author.url}
//         price={paintings[1].price}
//         quantity={paintings[1].quantity}
//       />

//       <Painting
//         url={paintings[2].url}
//         title={paintings[2].title}
//         author={paintings[2].author.tag}
//         profileUrl={paintings[2].author.url}
//         price={paintings[2].price}
//         quantity={paintings[2].quantity}
//       />
//     </div>
//   );
// };


//? Planes
//todo: var.2
export default function App() {
  return (
    <div>
      {planes.map(plane =>
        <Planes
          key={plane.id}
          urlMain={plane.url.main}
          urlPromotional={plane.url.promotional}
          urlActual={plane.url.actual}
          nameBrief={plane.name.brief}
          nameFull={plane.name.full}
          nickname={plane.name.nickname}
          year={plane.info.year}
          country={plane.info.country}
          type={plane.info.type}
          price={plane.info.price}
          description={plane.info.description}
        />
      )}
    </div>
  );
};
