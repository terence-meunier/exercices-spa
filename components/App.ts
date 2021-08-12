import * as ε from '../tools/ε/';

// import components
import Header from './Header';
import Input from './Input';

class App extends ε.Component {
// We want to render html like: 

  //     <div>
  //       <Header />
  //     </div>
  render() {
    return ε.generate(
      'div',
      [],
      [
        ε.generate(Header, [], []),
        ε.generate('label', [{for: 'mon-input'}], ['Changer le titre : ']),
        ε.generate(Input, [], [])
      ]);
  }
}

export default App;