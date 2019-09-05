import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './Components/App';
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';


const MyApp = () =>(
    <Router>
        <App />
    </Router>
);


ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
