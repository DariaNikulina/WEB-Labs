import { lawProtectedData } from "../../mockData/lawProtectedData.js"
import { lawProtectedTemplate } from "../templates/lawProtectedTemplate.js"

const initLawProtected = (element) => {
    const lawProtectedNode = element.querySelector(".law_protected");
    lawProtectedNode.insertAdjacentHTML("beforeend", lawProtectedTemplate(lawProtectedData));
};

export default initLawProtected;
