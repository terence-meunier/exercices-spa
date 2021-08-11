import * as ε from './tools/ε';
import App from './components/App';


// Point d'entré de votre site.

const app = new App();
const virtualDOM = app.render();
const DOM = ε.ElementToHTML(virtualDOM);
ε.start(DOM, document.getElementById('root'));