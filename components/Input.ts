import * as ε from '../tools/ε/';

class Input extends ε.Component {

  render() {
    return ε.generate(
      'input', 
      [
        {
          id: 'mon-input',
          style: 'border: 1px solid black'
        }
      ], 
      []);
  }
}

export default Input;