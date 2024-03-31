const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isBlogDataValid = (data) => {
  // проверяем массив на наличие длины и соответствие типу "массив"
  const arrayLength = isArrayHasLength(data);

  if (!arrayLength)
    throw new Error("Переданные данные - не массив или длина = 0");

  // пробегаем по массиву, ищем null'ы и отсутствующие аттрибуты
 
  data.forEach(obj => {
    isObjectHasProps(obj, ["img", "rest"]);
    const  {img, rest} = obj;
    isObjectHasProps(img, ["src", "alt"]);
    isObjectHasProps(rest, ["title", "data","linkTitle","href","isPrimary"]);
  });
};



module.exports = isBlogDataValid;

