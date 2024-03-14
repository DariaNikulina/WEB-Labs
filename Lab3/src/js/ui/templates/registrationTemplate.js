import { createH3Elements } from "./elements/SimpleElements/createH3Elements.js";
import { createButtonElements } from "./elements/SimpleElements/createButtonElements.js";


export const registrationTemplate = ({
    header,
    registrationCtaButtons
}) => {
    const headerTemplate = createH3Elements(header, "text_2");
    const buttonsTemplate = createButtonElements(registrationCtaButtons.title, "text");

    const resultTemplate = `
    <div class="section begin">
        <div class="begin_colon">
            <div class="begin__left">
                <p class="text_1">
                    Запросите ранний доступ
                </p>
                    ${headerTemplate}
            </div>
            <div class="begin__right">
                <div class="start_button">
                    <a href="#">
                        ${buttonsTemplate}
                    </a>
                </div>
            </div>
        </div>
      </div>
    `;

    return resultTemplate
}