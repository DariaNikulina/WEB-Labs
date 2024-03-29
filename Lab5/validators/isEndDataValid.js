const { isObjectHasProps } = require("./utils/validators");

const isEndDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["text"]);
};

module.exports = isEndDataValid;
