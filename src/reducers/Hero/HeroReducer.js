import { HeroStoreInitialState } from './../../actions/HeroActions';
import { HeroTypes } from './../../actions/ActionTypes';
import { HeroTypeCnt } from './../../components/HeroSelect';


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
        case HeroTypes.SET_HERO_CNT: {
            state = {...state, hero_cnts: action.payload};
            break;
        }
        case HeroTypes.SET_ALL_HERO: {
            state = {...state, all: action.payload};
            break;
        }
        case HeroTypes.GENERATE_HERO_PENDING: {
            state = {...state, generating: true};
            break;
        }
        case HeroTypes.GENERATE_HERO_FULFILLED: {
            state = {...state, hero_index: action.payload.data, generating: false};
            break;
        }
        case HeroTypes.GENERATE_ALL_HERO_PENDING: {
            state = {...state, generating: true};
            break;
        }
        case HeroTypes.GENERATE_ALL_HERO_FULFILLED: {
            let result = action.payload.data.split("\n");
            let hero_type = parseInt(result[0], 10) % (HeroTypeCnt - 1);
            let hero_index = parseInt(result[1], 10) % (state.hero_cnts[hero_type]);
            
            state = {...state, generating: false, hero_type: hero_type, hero_index: hero_index};
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