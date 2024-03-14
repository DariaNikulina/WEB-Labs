import { createImgElements } from "./elements/SimpleElements/createImgElements.js";

export const brandsTemplate = (brandsData) => {
  const brandsImagesTemplate = brandsData
    .map((brandData) => createImgElements(brandData, "brands_section__img"))
    .join("");

  return brandsImagesTemplate;
};
