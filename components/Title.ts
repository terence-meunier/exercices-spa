import * as ε from '../tools/ε/';
import inputFieldObservable from '../tools/observables/inputFieldObservable';

class Title extends ε.Component {

  public states: string;

  constructor(props) {
    super();
    this.states = props;
  }

  update(data) {
    this.setState({texte: data});
  }

  render() {

    inputFieldObservable.registerObserver(data => {
      this.update(data);
    });

    return ε.generate('h1', [{ type: 'h1' }], [this.states.texte], this.states);
  }
}

export default Title;