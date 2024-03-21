export const createInputTemplate = ({ src,data, title, linkTitle, href, isPrimary }) => {
    switch (isPrimary) {
      case true:
        return `
        <div class="blog__left">
        <div class="box_1">
          <img src="${src}" />
          <div class="one_1">
              <p class="text_start_1">
              ${data}
              </p>
              <p class="text_1">
              ${title}
              </p>
              <a href="${href}" >
              ${linkTitle}
              </a>
          </div>
            </div>
        </div>
        `;
  
      case false:
        return `
       
        `;
  
      default:
        return ``;
    }
  };
  export const createInputTemplate2 = ({ src,data, title, linkTitle, href, isPrimary }) => {
    switch (isPrimary) {
      case true:
        return `
        
        `;
  
      case false:
        return `
       
        <div class="box_2">
        <img src="${src}" />
        <div class="one_2">
            <p class="text_start_2">
            ${data}
            </p>
            <p class="text_2">
            ${title}
            </p>
            <a href="${href}" >
            ${linkTitle}
            </a>
        </div>
            </div>
        
        `;
  
      default:
        return ``;
    }
  };
  
  export const createInputsTemplate = (blogData) => {
    const blogElemsTemplate = blogData
      .map((blogData) => createInputTemplate(blogData))
      .join("");
  
    const template = `
       
          ${blogElemsTemplate}
      
    `;
  
    return template;
  };
  

  export const createInputsTemplate2 = (blogData) => {
    const blogElemsTemplate = blogData
      .map((blogData) => createInputTemplate2(blogData))
      .join("");
  
    const template = `
    
          ${blogElemsTemplate}
   
    `;
  
    return template;
  };

  export const blogTemplate = ({
    elements
  }) => {
    const descriptionTemplate = createInputsTemplate(elements);
    const descriptionTemplate2 = createInputsTemplate2(elements);
    const resultTemplate = `
        ${descriptionTemplate}
        <div class="blog__middle">
        ${descriptionTemplate2}
        </div>
      `;
  
    return resultTemplate;
  };