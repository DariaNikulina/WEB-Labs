import initBurger from "./../components/initBurger.js";

import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initExceedingAllExpectations from "./../components/initExceedingAllExpectations.js";
import initRegistration from "./../components/initRegistration.js";
import initBlogSection from "./../components/initBlogSection.js";

import initStepIntoFuture from "./../components/initStepIntoFuture.js";
import initFooter from "./../components/initFooter.js";
import initLawProtected from "./../components/initLawProtected.js";

const initHomePage1 = (element) => {
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section exceeding_all_expectations"></section>
    <section class="section registration"></section>
    <section class="section blog_section"></section>
  `;

  element.insertAdjacentHTML("beforeend", template);
};

const initHomePage2 = (element) => {
  const template = `
    <section class="section step_into_future"></section>
    <section class="section footer"></section>
    <section class="law_protected"></section>
  `;

  element.insertAdjacentHTML("beforeend", template);
};

const rootNode1 = document.querySelector(".page");
const rootNode2 = document.querySelector(".page2");
// const rootNode2 = document.querySelector("#root2");

const homePage = () => {
  // инициализация элементов Главной страницы
  initHomePage1(rootNode1);
  initHomePage2(rootNode2);
  // initHomePage(rootNode2);

  // инициализация шапки страницы с мок датой
  initHeader(rootNode1);
  // initHeader(rootNode2);

  // инициализация хиро раздела
  initHero(rootNode1);
  // initHero(rootNode2);

  // инициализация хиро раздела
  initBrands(rootNode1);

  // инициализация хиро раздела
  initWhatIsGpt(rootNode1);

  // инициализация раздела "Будущее наступило" с мок датой
  initFutureHere(rootNode1);

  // инициализация раздела "Превосходя все ожидания" с мок датой
  initExceedingAllExpectations(rootNode1);

  // инициализация раздела "Зарегистрируйся" с мок датой
  initRegistration(rootNode1);

  // инициализация раздела "Блог" с мок датой
  initBlogSection(rootNode1)

  // инициализация раздела "Шагнуть в будущее" с мок датой
  initStepIntoFuture(rootNode2)

  // инициализация раздела "Футер" с мок датой
  initFooter(rootNode2)

  // инициализация раздела "Все права защищены" с мок датой
  initLawProtected(rootNode2)

  // инициализация бургера для адаптивного меню
  initBurger();
};

export default homePage;
