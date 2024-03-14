import brandsData from "../../mockData/brandsData.js";
import { brandsTemplate } from "../templates/brandsTemplate.js";

const initBrands = () => {
  const brandsNode = document.querySelector(".brands_section");

  brandsNode.insertAdjacentHTML("beforeend", brandsTemplate(brandsData));

  // удаляем мок контент
  // brandsNode.innerHTML = "";

  // используем сервис для получения данных
  // const newData = getService.getBrandsData();
  // brandsNode.insertAdjacentHTML("beforeend", brandsTemplate(newData));
};

export default initBrands;
