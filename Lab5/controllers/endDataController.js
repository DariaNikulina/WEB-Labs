const isEndDataValid = require("../validators/isEndDataValid");

const {
  getEndDataModel,
  postEndDataModel,
} = require("../model/files/endDataModel");

const getEndData = (req, res, next) => {
  try {
    const data = getEndDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postEndData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isEndDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postEndDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getEndData, postEndData };
