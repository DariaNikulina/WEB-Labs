const isBlogTextDataValid = require("../validators/isBlogTextDataValid");

const {
  getBlogTextDataModel,
  postBlogTextDataModel,
} = require("../model/files/blogTextDataModel");

const getBlogTextData = (req, res, next) => {
  try {
    const data = getBlogTextDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postBlogTextData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isBlogTextDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postBlogTextDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getBlogTextData, postBlogTextData};
