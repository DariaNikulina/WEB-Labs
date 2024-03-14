import { createH1Elements } from "./elements/SimpleElements/createH1Elements.js";
import { createButtonElements } from "./elements/SimpleElements/createButtonElements.js";


export const createInputsTemplate = ({ title }) => {
    return `
    <div class="footer_button">
        <a href="" class="footer_button_text">
            ${createButtonElements(title)}
        </a>
    </div>
    `
};

export const stepIntoFutureTemplate = ({
    header,
    stepIntoFutureCtaButtons
}) => {
    const headerTemplate = createH1Elements(header, "footer_end");
    const buttonsTemplate = createInputsTemplate(stepIntoFutureCtaButtons);

    const resultTemplate = `
        ${headerTemplate}
        ${buttonsTemplate}
    `;

    return resultTemplate
}