import defaultImage from "./default.jpg" //! Дефолтне зображення


export default function Planes({
  urlMain = defaultImage, //! Дефолтне зображення
  urlPromotional = defaultImage, //! Дефолтне зображення
  urlActual,
  nameBrief,
  nameFull,
  nickname = "не відомо",
  year,
  country,
  type,
  price,
  description
})
{
  return <div>
    <h2>{nameBrief}</h2>
    <img src={urlMain} alt={nameBrief} width="400" />
    <p>Повна назва: {nameFull}</p>
    <p>Тип: {type}</p>
    <p>Прізвисько: {nickname}</p>
    <p>Країна виробник: {country}</p>
    <p>Рік випуску: {year}</p>
    <p>Ціна: {price}</p>
    <p>Опис: {description}</p>
    <p>Рекламна модель:</p>
    <img src={urlPromotional} alt={nameBrief} width="300" />
    <p>Реальна модель:</p>
    <img src={urlActual} alt={nameBrief} width="600" />
    <br />
    <button type="button">Додати до кошику</button>
  </div>
};