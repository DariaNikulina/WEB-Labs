import { createH3Elements } from "../SimpleElements/createH3Elements.js"
import { createPElements } from "../SimpleElements/createPElements.js";

export const createWhatIsGptContainer = ({ header, content }) => {
    return `
      <div class="bottom__container">
          ${createH3Elements(header, "container__header lined_header")}
          ${createPElements(content, "container__content")}
      </div>
      `;
};

export default createWhatIsGptContainer