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

export {
  Component,
  start
};