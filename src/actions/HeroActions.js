import axios from 'axios';
import { HeroTypes } from './ActionTypes';


const initial_state = {
    generating: false,
    all: false,
    hero_type: 0,
    hero_index: 0,
    hero_cnts: []
};

function setHeroType(hero_value=0) {
    return {
        type: HeroTypes.SET_HERO_TYPE,
        payload: hero_value
    }
}

function setHeroIndex(hero_index=0) {
    return {
        type: HeroTypes.SET_HERO_INDEX,
        payload: hero_index
    }
}

function setHeroCnt(hero_cnt=[]) {
    return {
        type: HeroTypes.SET_HERO_CNT,
        payload: hero_cnt
    }
}

function setAllHero(all_hero_flag) {
    return {
        type: HeroTypes.SET_ALL_HERO,
        payload: all_hero_flag
    }
}

function generateRandomHero(hero_cnt=0) {
    let url = 'https://www.random.org/integers/?num=1&min=0&max=' + (hero_cnt - 1) + '&col=1&base=10&format=plain&rnd=new';
    
    return {
        type: HeroTypes.GENERATE_HERO,
        payload: axios.get(url)
    }
}

function generateAllRandomHero(generator) {
    let url = 'https://www.random.org/integers/?num=2&min=1&max=100&col=1&base=10&format=plain&rnd=new';
    return {
        type: HeroTypes.GENERATE_ALL_HERO,
        payload: axios.get(url),
        generator: 'test'
    }
}

export {
    initial_state as HeroStoreInitialState,
    setHeroType,
    setHeroIndex,
    setHeroCnt,
    setAllHero,
    generateRandomHero,
    generateAllRandomHero
}