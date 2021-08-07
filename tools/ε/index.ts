import { Element } from './frameworkTypes';

// Base class for components
abstract class Component {
  abstract render(): Element
}

export {
  Component
};