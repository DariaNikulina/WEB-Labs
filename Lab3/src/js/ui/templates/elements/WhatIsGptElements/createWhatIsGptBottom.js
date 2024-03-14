import { createWhatIsGptContainer } from "./createWhatIsGptContainer.js";

export const createWhatIsGptBottom = (whatIsGptBottomData) => {
    const template = whatIsGptBottomData
        .map((item) => createWhatIsGptContainer(item))
        .join("");

    return template;
};

export default createWhatIsGptBottom