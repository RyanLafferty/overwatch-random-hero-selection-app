import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeroPicker from './screens/HeroPicker'
import './index.css';
import App from './App'

ReactDOM.render(
    <HeroPicker/>,
    document.getElementById('root')
);

