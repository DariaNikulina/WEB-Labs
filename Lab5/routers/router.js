const express = require("express");
const router = express.Router();

// Header роутер
const {
  getHeaderData,
  postHeaderData,
} = require("../controllers/headerDataController");

router.route("/header").get(getHeaderData).post(postHeaderData);

// Hero роутер
const {
  getHeroData,
  postHeroData,
} = require("../controllers/heroDataController");

router.route("/hero").get(getHeroData).post(postHeroData);

// Brands роутер
const {
  getBrandsData,
  postBrandsData,
} = require("../controllers/brandsDataController");

router.route("/brands").get(getBrandsData).post(postBrandsData);

// Future Here роутер
const {
  getFutureHereData,
  postFutureHereData,
} = require("../controllers/futureHereDataController");

router.route("/future-here").get(getFutureHereData).post(postFutureHereData);

// WhatIsGpt роутер
const {
  getWhatIsGptData,
  postWhatIsGptData,
} = require("../controllers/whatIsGptDataController");

router.route("/what-is-gpt").get(getWhatIsGptData).post(postWhatIsGptData);

// ExceedingExpectation роутер
const {
  getExceedingExpectationData,
  postExceedingExpectationData,
} = require("../controllers/exceedingExpectationDataController");

router.route("/exceeding-expectation").get(getExceedingExpectationData).post(postExceedingExpectationData);

// Begin роутер
const {
  getBeginData,
  postBeginData,
} = require("../controllers/beginDataController");

router.route("/begin").get(getBeginData).post(postBeginData);

// BlogText роутер
const {
  getBlogTextData,
  postBlogTextData,
} = require("../controllers/blogTextDataController");

router.route("/blog-text").get(getBlogTextData).post(postBlogTextData);

// Blog роутер
const {
  getBlogData,
  postBlogData,
} = require("../controllers/blogDataController");

router.route("/blog").get(getBlogData).post(postBlogData);

// Footer роутер
const {
  getFooterData,
  postFooterData,
} = require("../controllers/footerDataController");

router.route("/footer").get(getFooterData).post(postFooterData);

// End роутер
const {
  getEndData,
  postEndData,
} = require("../controllers/endDataController");

router.route("/end").get(getEndData).post(postEndData);




module.exports = router;
