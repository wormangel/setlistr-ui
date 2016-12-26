import ReactDOM from 'react-dom';
import renderRouter from './routes.js';
import './application.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  renderRouter(),
  document.getElementById('app')
);