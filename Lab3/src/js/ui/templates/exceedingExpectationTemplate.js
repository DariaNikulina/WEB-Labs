
export const createIllustrationTemplate = ({ src, alt }) => {
    return `
      <img src="${src}" alt="${alt}" />
    `;
  };
  
  export const createDescriptionTemplate = ({pretitle,title,description}) => {
    return `
    <p class="container__content_1">
    ${pretitle}
    </p>
    <h2 class="right__header">
    ${title}
    </h2>
    <p class="container__content_2">
    ${description}
    </p>
    `;
  };
  export const createLinkTemplate = ({ title, href }) => {
    return `
        <a href=${href} class="right__cta">${title}</a>
    `;
  };
  
 
  
  export const exceedingExpectationTemplate = ({
    girlWithGlasses,
    text,
    links
  }) => {
    const IllustrationTemplate = createIllustrationTemplate(girlWithGlasses);
    const descriptionTemplate = createDescriptionTemplate(text);
    const LinkTemplate = createLinkTemplate(links);

    const resultTemplate = `
    <div class="exceeding_expectation__left">${IllustrationTemplate}</div>
    <div class="exceeding_expectation__right">
    <div class="right__container">
        ${descriptionTemplate}
        ${LinkTemplate}
    </div>
    </div>
      `;
  
    return resultTemplate;
  };
  