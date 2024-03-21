import exceedingData from "../../mockData/exceedingData.js";
import { exceedingTemplate } from "../templates/exceedingTemplate.js";

const initExceeding = () => {
  const exceedingNode = document.querySelector(".exceeding_expectation");

  exceedingNode.insertAdjacentHTML("beforeend", exceedingTemplate(exceedingData)
  );
};

export default initExceeding;