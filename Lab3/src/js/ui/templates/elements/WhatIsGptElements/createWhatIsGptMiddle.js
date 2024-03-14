import { createH2Elements } from "../SimpleElements/createH2Elements.js"
import { createAElements } from "../SimpleElements/createAElements.js";

export const createWhatIsGptMiddle = ({
    header,
    button
}) => {
    const template = `
          ${createH2Elements(header, "middle__header")}
          ${createAElements(button, "middle_cta")}
      `;

    return template;
};

export default createWhatIsGptMiddle