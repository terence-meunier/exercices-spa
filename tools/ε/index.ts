import { Element } from './frameworkTypes';

// parent class for components
abstract class Component {
  
  public states: string;

  constructor(props) {
    this.states = props;
  }
  
  abstract render(): Element

  setState(data) {
    for (const [key, value] of Object.entries(data)) {
      reconciliation(key, this.states[key], value);
      this.states[key] = value;
    }
  }
}

function reconciliation(key, oldValue, newValue) {
  const selector = `*[${key}="${oldValue}"]`;
  const element = document.querySelector(selector);
  element.textContent = newValue;
  element.setAttribute(key, newValue);
}

function start(rootComponent, rootHtml: HTMLElement): void {
  rootHtml.appendChild(rootComponent);
}

function generate(tagName, attributes, children, props?): Element {
  return (
    {
      tagName, attributes, children: children.reduce((acc, child) => {
        if (typeof child.tagName === 'function') {
          const inst = new child.tagName(child.props);
          acc.push(inst.render());
        } else {
          acc.push(child);
        }
        return acc;
      }, []), props
    }
  )
}

function ElementToHTML(element): HTMLElement {

  // Création de la balise HTML selon le tagName de l'élement du DOM Virtuel
  const elt = document.createElement(element.tagName);

  // Si l'élement du DOM possède des attributs
  if (element.attributes.length !== 0) {
    element.attributes.forEach((attribute) => {
      for (const [key, value] of Object.entries(attribute)) {
        // On les ajoute un par un à la balise HTML
        if (key === 'className') {
          elt.setAttribute('class', value);
        } else {
          elt.setAttribute(key, value);
        }        
      };
    });
  }

  // Si il y a des enfants dans l'élement du DOM Virtuel on les ajoute à la balise HTML
  // En rappellant la fonction ElementToHTML (Appel récursif)
  if (element.children.length !== 0) {
    element.children.forEach((child) => {
      if (typeof child === 'string') {
        elt.textContent = child;
      } else {
        elt.appendChild(ElementToHTML(child));
      }
    });
  }

  if (element.props) {
    for (const [key, value] of Object.entries(element.props)) {
      elt.setAttribute(key, value);
    }
  }

  return elt;
}

export {
  Component,
  generate,
  start,
  ElementToHTML 
};