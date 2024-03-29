const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFooterDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["text", "massiveData"]);

  const { text, massiveData } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(text, ["title", "calling", "href"]);

  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  isArrayHasLength(massiveData);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  massiveData.forEach((item) => isObjectHasProps(item, ["classname", "title","links"]),
  links.forEach((link)=>isObjectHasProps(link,["classname","title","href"]))
  );

};

module.exports = isFooterDataValid;
