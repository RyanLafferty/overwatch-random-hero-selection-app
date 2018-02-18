import axios from 'axios';
import { HeroTypes } from './ActionTypes';


const initial_state = {
    generating: false,
    hero_type: 0,
    hero_index: 0
};

function setHeroType(hero_value=-1) {
    return {
        type: HeroTypes.SET_HERO_TYPE,
        payload: hero_value
    }
}

function setHeroIndex(hero_index=-1) {
    return {
        type: HeroTypes.SET_HERO_INDEX,
        payload: hero_index
    }
}

export {
    initial_state as HeroStoreInitialState,
    setHeroType,
    setHeroIndex
}