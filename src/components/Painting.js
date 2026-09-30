import PropTypes from 'prop-types';
import defaultImage from "./default.jpg" //! Дефолтне зображення


//! Підстановка дефолтного зображення якщо url є, але шлях помилковий (від Антона)
function onErrorImg(e) {
  e.target.onError = null;
  e.target.src = defaultImage;
};


// export default function Painting(props)
// export default function Painting({
const Painting = ({
  url = defaultImage, //! Дефолтне зображення
  title,
  author = "не відомо",
  profileUrl,
  price,
  quantity
}) =>
{
  // const { url, title, author, profileUrl, price } = props; //! Деструктурізація props
  return <div className="Card-painting">
    {/* <img src={url} alt={title} width="480" /> */}
    {/* //! Підстановка дефолтного зображення якщо url є, але шлях помилковий */}
    <img src={url} alt={title} width="480" onError={(e) => onErrorImg(e)} /> 
    <h3>{title}</h3>
    <p>Автор: <a href={profileUrl}>{author}</a></p>
    <p>Цена: {price} кредитов</p>
    {/* <p>Доступность: заканчивается или есть в наличии</p> */}
    <p>Доступность: {quantity < 10 ? "заканчивается" : "есть в наличии"}</p>
    <button type="button">Додати до кошику</button>
  </div>
};

//! Контроль типу змінних - propTypes
Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // price: PropTypes.string.isRequired, //! контроль propTypes
  quantity: PropTypes.number.isRequired,
};

export default Painting;