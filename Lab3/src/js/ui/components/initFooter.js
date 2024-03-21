import footerData from "../../mockData/footerData.js";
import { footerTemplate } from "../templates/footerTemplate.js";

const initfooter = () => {
  const footerNode = document.querySelector(".footer");
  footerNode.insertAdjacentHTML("beforeend", footerTemplate(footerData));
};

export default initfooter;