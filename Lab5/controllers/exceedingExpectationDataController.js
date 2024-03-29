const isExceedingExpectationDataValid = require("../validators/isExceedingExpectationDataValid");

const {
  getExceedingExpectationDataModel,
  postExceedingExpectationDataModel,
} = require("../model/files/exceedingExpectationDataModel");

const getExceedingExpectationData = (req, res, next) => {
  try {
    const data = getExceedingExpectationDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postExceedingExpectationData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isExceedingExpectationDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postExceedingExpectationDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getExceedingExpectationData, postExceedingExpectationData };
