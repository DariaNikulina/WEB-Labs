import { heroData } from "../../mockData/heroData.js";
import { heroTemplate } from "../templates/heroTemplate.js";

const initHero = (element) => {
  const heroNode = element.querySelector(".hero_section");

  heroNode.insertAdjacentHTML("beforeend", heroTemplate(heroData));
};

export default initHero;
