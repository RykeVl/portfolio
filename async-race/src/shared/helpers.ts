const { body } = document;

const createDOM = (
  tag: string,
  classNames: string[] = [],
  attributes?: Object,
) => {
  const newElement = document.createElement(tag);
  newElement.classList.add(...classNames);

  if (attributes) {
    const keys = Object.keys(attributes);
    const values = Object.values(attributes);
    for (let i = 0; i < keys.length; i += 1) {
      newElement.setAttribute(keys[i], values[i]);
    }
  }

  return newElement;
};

const appendChildren = (target: HTMLElement, children: HTMLElement[]) => {
  children.forEach((element) => {
    target.appendChild(element);
  });
};

export default { body, createDOM, appendChildren };
