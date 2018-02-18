import { combineReducers, createStore } from redux;
import { Middleware } from './Middleware';

const reducers = combineReducers({});

const store = createStore(reducers, Middleware);

export {
    store as HeroStore
}