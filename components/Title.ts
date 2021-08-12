import * as ε from '../tools/ε/';
import inputFieldObservable from '../tools/observables/inputFieldObservable';

class Title extends ε.Component {

  constructor(props) {
    super(props);
    
    inputFieldObservable.registerObserver(data => {
      this.update(data);
    });
  }

  update(data) {
    this.setState({texte: data});
  }

  render() {
    return ε.generate('h1', [{ type: 'h1' }], [this.states.texte], this.states);
  }
}

export default Title;