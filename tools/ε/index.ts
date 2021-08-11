import { Element } from './frameworkTypes';

// parent class for components
abstract class Component {
  abstract render(): Element
}

function start(rootComponent, rootHtml: HTMLElement): void {
  const rootInstance = new rootComponent();
  const rootRender = rootInstance.render();
  console.log(rootInstance);
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

export {
  Component,
  generate,
  start
};