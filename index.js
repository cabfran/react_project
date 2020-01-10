import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<App title={'I from props!'}/>, document.getElementById('root'));
serviceWorker.unregister();
