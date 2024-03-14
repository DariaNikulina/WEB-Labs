import headerData from "../../mockData/headerData.js";
import { headerTemplate } from "../templates/headerTemplate.js";

const initHeader = (element) => {
  const headerNode = element.querySelector(".header");

  headerNode.insertAdjacentHTML("beforeend", headerTemplate(headerData));
};

export default initHeader;
