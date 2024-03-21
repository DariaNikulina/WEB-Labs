import endData from "../../mockData/endData.js";
import { endTemplate } from "../templates/endTemplate.js";

const initend = () => {
  const endNode = document.querySelector(".end");
  endNode.insertAdjacentHTML("beforeend", endTemplate(endData));
};

export default initend;