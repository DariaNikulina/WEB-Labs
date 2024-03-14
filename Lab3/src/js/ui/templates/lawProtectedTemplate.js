import { createPElements } from "./elements/SimpleElements/createPElements.js";

export const lawProtectedTemplate = ({
  description
}) => {
  const lawProtectedTemplate = createPElements(description, "end_text");

  const resultTemplate = `
      <div class="end">
        ${lawProtectedTemplate}
      </div>
    `;

  return resultTemplate
}