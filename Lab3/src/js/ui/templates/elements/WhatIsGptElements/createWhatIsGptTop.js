import { createH3Elements } from "../SimpleElements/createH3Elements.js"
import { createPElements } from "../SimpleElements/createPElements.js";

export const createWhatIsGptTop = ({ header, content }) => {
    const template = `
          ${createH3Elements(header, "top__header lined_header")}
          ${createPElements(content, "top__content")}
      `;

    return template;
};

export default createWhatIsGptTop