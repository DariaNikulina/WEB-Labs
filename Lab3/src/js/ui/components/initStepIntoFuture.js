import { stepIntoFutureData } from "../../mockData/stepIntoFutureData.js"
import { stepIntoFutureTemplate } from "../templates/stepIntoFutureTemplate.js"

const initStepIntoFuture = (element) => {
    const stepIntoFutureNode = element.querySelector(".step_into_future");
    stepIntoFutureNode.insertAdjacentHTML("beforeend", stepIntoFutureTemplate(stepIntoFutureData));
}

export default initStepIntoFuture;