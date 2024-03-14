import { footerData } from "../../mockData/footerData.js"
import { footerTemplate } from "../templates/footerTemplate.js";

const initFooter = (element) => {
    const footerNode = element.querySelector(".footer");
    footerNode.insertAdjacentHTML("beforeend", footerTemplate(footerData))
}

export default initFooter;