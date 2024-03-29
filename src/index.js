import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './Components/App';
// import { HashRouter, Route, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const MyApp = () =>(
    <Router>
        <App />
    </Router>
);


ReactDOM.render(<MyApp />, document.getElementById('root'));


serviceWorker.unregister();
