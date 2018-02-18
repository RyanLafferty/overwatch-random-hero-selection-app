import { combineReducers, createStore } from 'redux';
import { Middleware } from './Middleware';
import { HeroReducer } from './Hero/HeroReducer';


const reducers = combineReducers({
    hero_type: HeroReducer, 
    hero_index: HeroReducer
});

const store = createStore(reducers, Middleware);

export {
    store as HeroStore
}