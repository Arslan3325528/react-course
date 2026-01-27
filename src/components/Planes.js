import defaultImage from "./default.jpg" //! Дефолтне зображення

export default function Planes({
  urlMain,
  urlModel = defaultImage, //! Дефолтне зображення
  urlTemplate,
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
    <img src={urlMain} alt={nameBrief} width="600" />
    
    <p>Повна назва: {nameFull}</p>
    <p>Тип: {type}</p>
    <p>Прізвисько: {nickname}</p>
    <p>Країна виробник: {country}</p>
    <p>Рік випуску: {year}</p>
    <p>Ціна: {price}</p>
    <p>Опис: {description}</p>
    <p>Модель:</p>
    <img src={urlModel} alt={nameBrief} />
    <br />
    <button type="button">Додати до кошику</button>
  </div>
};