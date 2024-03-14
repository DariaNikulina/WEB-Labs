import { createInputElements } from "./elements/SimpleElements/createInputElements.js";
import { createButtonElements } from "./elements/SimpleElements/createButtonElements.js";
import { createH1Elements } from "./elements/SimpleElements/createH1Elements.js";
import { createPElements } from "./elements/SimpleElements/createPElements.js";
import { createImgElements } from "./elements/SimpleElements/createImgElements.js";


export const createInputTemplate = ({ type, title }) => {
  switch (type) {
    case "input":
      return createInputElements(title);

    case "button":
      return createButtonElements(title, "btn primary-btn cta_buttons__signin");

    default:
      return ``;
  }
};

export const createInputsTemplate = (ctaButtons) => {
  const ctaButtonsTemplate = ctaButtons
    .map((ctaButton) => createInputTemplate(ctaButton))
    .join("");

  const template = `
    <div class="left__cta_buttons">
        ${ctaButtonsTemplate}
    </div>
  `;

  return template;
};

export const heroTemplate = ({
  heroCtaButtons,
  illustration,
  header,
  description,
}) => {
  const headerTemplate = createH1Elements(header, "left__header");
  const descriptionTemplate = createPElements(description, "left__description");
  const buttonsTemplate = createInputsTemplate(heroCtaButtons);
  const illustrationTemplate = createImgElements(illustration, "heroImg");

  const resultTemplate = `
    <div class="hero_section__left">
        ${headerTemplate}
        ${descriptionTemplate}
        ${buttonsTemplate}       
    </div>
    <div class="hero_section__right">
        ${illustrationTemplate}
    </div>
    `;

  return resultTemplate;
};
