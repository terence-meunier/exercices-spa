import * as ε from './tools/ε';
import App from './components/App';


// Point d'entré de votre site.

const app = new App();
console.log(app.render());
// ε.start(App, document.getElementById('root'));