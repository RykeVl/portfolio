function createDOM(tag = 'div', classes = [], attributes) {
  const element = document.createElement(tag);
  element.classList.add(...classes);

  if (attributes) {
    const keys = Object.keys(attributes);
    const values = Object.values(attributes);
    
    for (let i = 0; i < keys.length; i += 1) {
      element.setAttribute(keys[i], values[i]);
    }
  }

  return element;
}

function appendChildren(parent, children) {
  parent.append(...children);
}

const body = document.body;

export default {
  createDOM,
  appendChildren,
  body
}