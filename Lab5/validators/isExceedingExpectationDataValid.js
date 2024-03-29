const { isObjectHasProps } = require("./utils/validators");

const isExceedingExpectationDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["img", "text", "links"]);

  const { img, text, links } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(img, ["src", "alt"]);
  isObjectHasProps(text, ["pretitle", "title","description"]);
  isObjectHasProps(links, ["calling", "href"]);

};

module.exports = isExceedingExpectationDataValid;
