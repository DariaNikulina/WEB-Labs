import beginData from "../../mockData/beginData.js";
import { beginTemplate } from "../templates/beginTemplate.js";

const initbegin = () => {
  const beginNode = document.querySelector(".begin");
  beginNode.insertAdjacentHTML("beforeend", beginTemplate(beginData));
};

export default initbegin;