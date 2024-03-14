import { exceedingAllExpectationsData } from "../../mockData/exceedingAllExpectationsData.js";
import { exceedingAllExpectationsTemplate } from "../templates/exceedingAllExpectationsTemplate.js";

const initExceedingAllExpectations = (element) => {
    const exceedingAllExpectationsNode = element.querySelector(".exceeding_all_expectations");
    exceedingAllExpectationsNode.insertAdjacentHTML("beforeend", exceedingAllExpectationsTemplate(exceedingAllExpectationsData))
}

export default initExceedingAllExpectations;
