import { createH3Elements } from "../SimpleElements/createH3Elements.js"
import { createPElements } from "../SimpleElements/createPElements.js";

export const createGPT3 = ({ header, description }) => {
    const headerTemplate = createH3Elements(header, "gpt_1");
    const descriptionTemplate = createPElements(description, "gpt_2");
    const resultTemplate = `
    <div class="colonki">
        <div class="gpt">
            ${headerTemplate}
            ${descriptionTemplate}
         </div>
    </div>
    `

    return resultTemplate
}

export default createGPT3
