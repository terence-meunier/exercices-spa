import * as ε from './tools/ε';
import App from './components/App';
import inputFieldObservable from './tools/observables/inputFieldObservable';

const app = new App();
const virtualDOM = app.render();
const DOM = ε.ElementToHTML(virtualDOM);
ε.start(DOM, document.getElementById('root'));

// Events
document.querySelector('#mon-input').addEventListener('change', (event) => {
    inputFieldObservable.update(event.target.value);
});