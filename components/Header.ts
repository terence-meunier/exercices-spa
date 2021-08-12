import inputFieldObservable from '../tools/observables/inputFieldObservable';
import inputFieldObservable2 from '../tools/observables/inputFieldObservable2';
import * as ε from '../tools/ε/';

// import components
import Title from './Title';

// We want to render html like: 

//     <div class="w-full flex justify-center items-center border-2 bg-gray-300">
//       <Title type="h1" >HELLO WORLD</Title>
//     </div>

class Header extends ε.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return ε.generate(
      'div',
      [
        {
          className: 'w-full justify-center items-center border-2 bg-gray-300'
        }
      ],
      [
        ε.generate('div', [], [ε.generate(Title, [], [], { texte: 'HELLO WORLD', observables: [inputFieldObservable] })]),
        ε.generate('div', [], [ε.generate(Title, [], [], { texte: 'HELLO WORLD', observables: [inputFieldObservable2] })])
      ]);
  }
}

export default Header;