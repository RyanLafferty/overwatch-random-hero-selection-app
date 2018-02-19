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

function generateRandomHero(hero_cnt=0) {
    let url = 'https://www.random.org/integers/?num=1&min=0&max=' + (hero_cnt - 1) + '&col=1&base=10&format=plain&rnd=new';
    
    return {
        type: HeroTypes.GENERATE_HERO,
        payload: axios.get(url)
    }
}

export {
    initial_state as HeroStoreInitialState,
    setHeroType,
    setHeroIndex,
    generateRandomHero
}