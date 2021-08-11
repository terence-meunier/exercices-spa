import { Element } from './frameworkTypes';

// parent class for components
abstract class Component {
  abstract render(): Element
}

function start(rootComponent, rootHtml: HTMLElement): void {
  rootHtml.appendChild(rootComponent);
}

function generate(tagName, attributes, children): Element {
  return (
    {
      tagName, attributes, children: children.reduce((acc, child) => {
        if (typeof child.tagName === 'function') {
          const inst = new child.tagName();
          acc.push(inst.render());
        } else {
          acc.push(child);
        }
        return acc;
      }, [])
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

  return elt;
}

export {
  Component,
  generate,
  start,
  ElementToHTML
};