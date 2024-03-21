export const creategirlWithGlassesTemplate = ({ src, alt }) => {
    return `
      <img class="girl_with_glasses__img" src="${src}" alt="${alt}" />
    `;
  };

  export const createContentTemplate = ({ content1, content2, content3, button: { href, title },}) => {
    const template = `
      <p class="container__content_1">
        ${content1}
      </p>
      <h2 class="right__header">
        ${content2}
      </h2>
      <p class="container__content_2">
        ${content3}
      </p>
      <a href="${href}" class="right__cta">${title}</a>
        
    `;   
    return template;
   };

export const exceedingTemplate = ({
    girlWithGlasses,
    contentAllData,
  }) => {
    const girlWithGlassesTemplate = creategirlWithGlassesTemplate(girlWithGlasses);
    const contentAllTemplate = createContentTemplate(contentAllData);
  
    const resultTemplate = `
      <div class="exceeding_expectation__left">
        ${girlWithGlassesTemplate}          
      </div>
      <div class="exceeding_expectation__right">
        <div class="right__container">
          ${contentAllTemplate}    
          <h2 class="text_blog__left"></h2>
        </div>
      </div>
      `;
  
    return resultTemplate;
  };