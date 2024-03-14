export const createImgElements = ({ src, alt }, className) => {
    return `
      <img class =${className} src="${src}" alt="${alt}" />
    `;
};

export default createImgElements