import { createWhatIsGptBottom } from "./elements/WhatIsGptElements/createWhatIsGptBottom.js";
import { createWhatIsGptMiddle } from "./elements/WhatIsGptElements/createWhatIsGptMiddle.js";
import { createWhatIsGptTop } from "./elements/WhatIsGptElements/createWhatIsGptTop.js";


export const whatIsGptTemplate = ({
  whatIsGptTopData,
  whatIsGptMiddleData,
  whatIsGptBottomData,
}) => {
  const whatIsGptTopTemplate = createWhatIsGptTop(whatIsGptTopData);
  const whatIsGptMiddleTemplate =
    createWhatIsGptMiddle(whatIsGptMiddleData);
  const whatIsGptBottomTemplate =
    createWhatIsGptBottom(whatIsGptBottomData);

  const resultTemplate = `
        <div class="what_is_chatgpt_section__top">
           ${whatIsGptTopTemplate}
        </div>
        <div class="what_is_chatgpt_section__middle">
           ${whatIsGptMiddleTemplate}
        </div>
        <div class="what_is_chatgpt_section__bottom">
           ${whatIsGptBottomTemplate}
        </div>
    `;

  return resultTemplate;
};
