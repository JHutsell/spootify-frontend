import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './Components/App';
import { HashRouter } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const MyApp = () =>(
    <HashRouter>
        <App />
    </HashRouter>
);


ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
