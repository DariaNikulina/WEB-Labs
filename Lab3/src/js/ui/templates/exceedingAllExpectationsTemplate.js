import { createPElements } from "./elements/SimpleElements/createPElements.js";
import { createImgElements } from "./elements/SimpleElements/createImgElements.js";
import { createH2Elements } from "./elements/SimpleElements/createH2Elements.js";



export const exceedingAllExpectationsTemplate = ({
  illustration,
  header,
  description
}) => {
  const headerTemplate = createH2Elements(header, "left__header");
  const descriptionTemplate = createPElements(description, "container__content");
  const illustrationTemplate = createImgElements(illustration, "exceedingAllExpectationsImg");

  const resultTemplate = `
        <div class="section exceeding_expectation">
        <div class="exceeding_expectation__left">
            ${illustrationTemplate}
        </div>
        <div class="exceeding_expectation__right">
        <div class="right__container">
            <p class="container__content_1">
                Запроси ранний доступ
            </p>
            ${headerTemplate}
            ${descriptionTemplate}
            <a href="#" class="right__cta">Запросить ранний доступ</a>
        </div>
        </div>
        </div>
    `;

  return resultTemplate
}