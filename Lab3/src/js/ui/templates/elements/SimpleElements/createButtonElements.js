export const createButtonElements = (title, className) => {
  return `
    <button class="${className}">
      ${title}
    </button>
  `;
}

export default createButtonElements