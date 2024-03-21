import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initexceedingExpectation from "./../components/initExceedingExpectation.js";
import initbegin from "./../components/initBegin.js";
import initblog from "./../components/initBlog.js";
import initblogText from "./../components/initBlogText.js";
import initfooter from "./../components/initFooter.js";
import initend from "./../components/initend.js";
import initBurger from "./../components/initBurger.js";

const initHomePage = (element) => {
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section exceeding_expectation"></section>
    <section class="section begin"></section>
    <section class="section blog_text"></section>
    <section class="section blog"></section>
    <section class="section footer"></section>
    <section class="end"></section>
    `;

  element.insertAdjacentHTML("beforeend", template);
};

const rootNode = document.querySelector("#root");
// const rootNode2 = document.querySelector("#root2");

const homePage = () => {
  // инициализация элементов Главной страницы
  initHomePage(rootNode);
  // initHomePage(rootNode2);

  // инициализация шапки страницы с мок датой
  initHeader(rootNode);
  // initHeader(rootNode2);

  // инициализация хиро раздела
  initHero(rootNode);
  // initHero(rootNode2);

  // инициализация хиро раздела
  initBrands();

  // инициализация хиро раздела
  initWhatIsGpt();

  // инициализация раздела "Будущее наступило" с мок датой
  initFutureHere();

  

  initexceedingExpectation();
  initbegin();
  initblog();
  initblogText();
  initfooter();
  initend();
  // инициализация бургера для адаптивного меню
  initBurger();
};

export default homePage;
