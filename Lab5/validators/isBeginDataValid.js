const { isObjectHasProps } = require("./utils/validators");

const isBeginDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["text", "buttonData"]);

  const { text, buttonData } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(text, ["title", "description"]);


  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
 
    isObjectHasProps(buttonData, ["title", "href"]);
};

module.exports = isBeginDataValid;
