const isBeginDataValid = require("../validators/isBeginDataValid");

const {
  getBeginDataModel,
  postBeginDataModel,
} = require("../model/files/beginDataModel");

const getBeginData = (req, res, next) => {
  try {
    const data = getBeginDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postBeginData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isBeginDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postBeginDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getBeginData, postBeginData };
