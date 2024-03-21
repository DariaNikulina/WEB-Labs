 export const createDescriptionTemplate = ({title}) => {
    return `
    <h1 class="text_blog__left">${title}</h1>
    `;
  };
  
  
  export const blogTextTemplate = ({
    text
  }) => {
    const descriptionTemplate = createDescriptionTemplate(text);
    
    const resultTemplate = `
    <div class="blog__left">
        ${descriptionTemplate}
      </div>
      <div class="blog__right">
      </div>
      `;
  
    return resultTemplate;
  };
  