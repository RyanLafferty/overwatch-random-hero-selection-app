import { HeroStoreInitialState } from './../../actions/HeroActions';
import { HeroTypes } from './../../actions/ActionTypes';


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
        case HeroTypes.GENERATE_HERO_PENDING: {
            state = {...state, generating: true};
            break;
        }
        case HeroTypes.GENERATE_HERO_FULFILLED: {
            state = {...state, hero_index: action.payload.data, generating: false};
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