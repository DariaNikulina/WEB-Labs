export const createDescriptionTemplate = ({text}) => {
    return `
    <p class="end_text">${text}</p>
    `;
  };



export const endTemplate = ({
    endText
  }) => {
    const descriptionTemplate = createDescriptionTemplate(endText);
   
    const resultTemplate = `
    ${descriptionTemplate}
    `;

      return resultTemplate;
    };
    