import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HeroStore } from './reducers/Reducer';
import HeroPicker from './screens/HeroPicker';
import './index.css';


ReactDOM.render(
    <Provider store={HeroStore}>
        <HeroPicker/>
    </Provider>,
    document.getElementById('root')
);
