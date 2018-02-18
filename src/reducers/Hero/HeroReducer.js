import HeroStoreInitialState from './../../actions/HeroActions';
import { HeroTypes } from './../../actions/ActionTypes';

console.log(HeroTypes);

const HeroReducer = (state=HeroStoreInitialState, action) => {
    switch (action.type) {
        case HeroTypes.SET_HERO_TYPE: {
            state = {...state, hero_type: action.payload};
            break;
        }
        case HeroTypes.SET_HERO_INDEX: {
            state = {...state, hero_index: action.payload};
            break;
        }
        default: {
            break;
        }
    }

    return state;
};

export {
    HeroReducer
}