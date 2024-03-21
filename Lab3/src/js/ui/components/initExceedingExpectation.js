import exceedingExpectationData from "../../mockData/exceedingExpectationData.js";
import { exceedingExpectationTemplate } from "../templates/exceedingExpectationTemplate.js";

const initexceedingExpectation = () => {
  const exceedingExpectationNode = document.querySelector(".exceeding_expectation");
  exceedingExpectationNode.insertAdjacentHTML("beforeend", exceedingExpectationTemplate(exceedingExpectationData));
};

export default initexceedingExpectation;
