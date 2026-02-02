import PropTypes from 'prop-types';
import defaultImage from "./default.jpg" //! Дефолтне зображення

// export default function Painting({
const Painting = ({
  url = defaultImage, //! Дефолтне зображення
  title,
  author = "не відомо",
  profileUrl,
  price,
  quantity
}) =>
// export default function Painting(props)
{
  // const { url, title, author, profileUrl, price } = props; //! Деструктурізація
  return <div className="Card-painting">
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
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