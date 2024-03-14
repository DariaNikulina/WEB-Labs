export const createPElements = (description, className) => {
    return `
      <p class=${className}>
        ${description}
      </p>
    `;
};

export default createPElements