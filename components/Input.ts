import * as ε from '../tools/ε/';

class Input extends ε.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return ε.generate(
      'input', 
      [
        {
          id: this.states.id,
          style: 'border: 1px solid black'
        }
      ], 
      [], this.states);
  }
}

export default Input;