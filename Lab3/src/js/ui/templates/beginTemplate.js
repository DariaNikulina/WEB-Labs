
   export const createDescriptionTemplate = ({title,description}) => {
    return `
    <p class="text_1">${title}</p>
    <p class="text_2">${description}</p>
    `;
  };
  export const createButtonTemplate = ({ title, href }) => {
    return `
    <div class="start_button">
    <a href=${href}><button class="text">${title}</button></a>
    </div>
    `;
  };
  
 
  
  export const beginTemplate = ({
    text,
    buttonData
  }) => {
    const descriptionTemplate = createDescriptionTemplate(text);
    const ButtonTemplate = createButtonTemplate(buttonData);

    const resultTemplate = `
    <div class="begin_colon">
    <div class="begin__left">
    ${descriptionTemplate}
    </div>
    <div class="begin__right">
    ${ButtonTemplate}
    </div>
  </div>
      `;
  
    return resultTemplate;
  };
  