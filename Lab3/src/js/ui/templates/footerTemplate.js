 export const createDescriptionTemplate = ({title}) => {
    return `
    <h1 class="footer_end">${title}</h1>
    `;
  };
  export const createButtonTemplate = ({ title, href }) => {
    return `
    <a href="${href}" class="footer_button_text"><button>${title}</button></a>
    `;
  };
  export const createLinksTemplate = ({title, href}, name)=> {
    return `
          <p class="${name}_2">
            <a href="${href}">${title}</a>
          </p>
    `;
  };

  
  export const createKolonkiTemplate = ({title, links}, name)=> {
    const LinkTemplate = links
    .map((link) => createLinksTemplate(link,name))
    .join('');

    return `
        <div class="${name}">
          <p class="${name}_1">
            ${title}
          </p>
          ${LinkTemplate}
          </div>
    `;
  };
  
  
  
  
  export const footerTemplate = ({
    one,
    two,
    three,
    four,
    text,
    buttonData
  }) => {
    const ButtonTemplate = createButtonTemplate(buttonData);
    const descriptionTemplate = createDescriptionTemplate(text);
    const oneTemplate = createKolonkiTemplate(one,"gpt");
    const twoTemplate = createKolonkiTemplate(two,"silki");
    const threeTemplate = createKolonkiTemplate(three,"kompan");
    const fourTemplate = createKolonkiTemplate(four,"kontakt");

    const resultTemplate = `
    
          ${descriptionTemplate}
          <div class="footer_button">
          ${ButtonTemplate}
          </div>
      
      <div class="colonki">
          ${oneTemplate}
          ${twoTemplate}
          ${threeTemplate}
          ${fourTemplate}
      </div>
      
      `;
  
    return resultTemplate;
  };
  