import * as ε from './tools/ε';
import App from './components/App';
import inputFieldObservable from './tools/observables/inputFieldObservable';
import inputFieldObservable2 from './tools/observables/inputFieldObservable2';

const app = new App();
const virtualDOM = app.render();
const DOM = ε.ElementToHTML(virtualDOM);
ε.start(DOM, document.getElementById('root'));

// Events
document.querySelector('#mon-input').addEventListener('change', (event) => {
    inputFieldObservable.update(event.target.value);
});

document.querySelector('#mon-input-2').addEventListener('change', (event) => {
    inputFieldObservable2.update(event.target.value);
});