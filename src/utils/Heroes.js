
import doomfist_image from './../res/img/NoHeroSelected.png'
import genji_image from './../res/img/heroes/genji.png'
import mccree_image from './../res/img/heroes/mccree.png'
import pharah_image from './../res/img/heroes/pharah.png'
import reaper_image from './../res/img/heroes/reaper.png'
import soldier76_image from './../res/img/heroes/soldier-76.png'
import sombra_image from './../res/img/heroes/sombra.png'
import tracer_image from './../res/img/heroes/tracer.png'


import bastion_image from './../res/img/heroes/bastion.png'
import hanzo_image from './../res/img/heroes/hanzo.png'
import junkrat_image from './../res/img/heroes/junkrat.png'
import mei_image from './../res/img/heroes/mei.png'
import torbjorn_image from './../res/img/heroes/torbjorn.png'
import widowmaker_image from './../res/img/heroes/widowmaker.png'


import dva_image from './../res/img/heroes/dva.png'
import orisa_image from './../res/img/heroes/orisa.png'
import reinhardt_image from './../res/img/heroes/reinhardt.png'
import roadhog_image from './../res/img/heroes/roadhog.png'
import winston_image from './../res/img/heroes/winston.png'
import zarya_image from './../res/img/heroes/zarya.png'


import ana_image from './../res/img/heroes/ana.png'
import lucio_image from './../res/img/heroes/lucio.png'
import mercy_image from './../res/img/heroes/mercy.png'
import moira_image from './../res/img/NoHeroSelected.png'
import symmetra_image from './../res/img/heroes/symmetra.png'
import zenyatta_image from './../res/img/heroes/zenyatta.png'



const doomfist = {
    id: 0,
    img: doomfist_image,
    label: "Doomfist",
    weigth: 1
}

const genji = {
    id: 1,
    img: genji_image,
    label: "Genji",
    weigth: 1
}

const mccree = {
    id: 2,
    img: mccree_image,
    label: "McCree",
    weigth: 1
}

const pharah = {
    id: 3,
    img: pharah_image,
    label: "Pharah",
    weigth: 1
}

const reaper = {
    id: 4,
    img: reaper_image,
    label: "Reaper",
    weigth: 1
}

const soldier76 = {
    id: 5,
    img: soldier76_image,
    label: "Soldier 76",
    weigth: 1
}

const sombra = {
    id: 6,
    img: sombra_image,
    label: "Sombra",
    weigth: 1
}

const tracer = {
    id: 7,
    img: tracer_image,
    label: "Tracer",
    weigth: 1
}



const bastion = {
    id: 0,
    img: bastion_image,
    label: "Bastion",
    weigth: 1
}

const hanzo = {
    id: 1,
    img: hanzo_image,
    label: "Hanzo",
    weigth: 1
}

const junkrat = {
    id: 2,
    img: junkrat_image,
    label: "Junkrat",
    weigth: 1
}

const mei = {
    id: 3,
    img: mei_image,
    label: "Mei",
    weigth: 1
}

const torbjorn = {
    id: 4,
    img: torbjorn_image,
    label: "Torbjörn",
    weigth: 1
}

const widowmaker = {
    id: 5,
    img: widowmaker_image,
    label: "Widowmaker",
    weigth: 1
}


const dva = {
    id: 0,
    img: dva_image,
    label: "D.Va",
    weigth: 1
}

const orisa = {
    id: 1,
    img: orisa_image,
    label: "Orisa",
    weigth: 1
}

const reinhardt = {
    id: 2,
    img: reinhardt_image,
    label: "Reinhardt",
    weigth: 1
}

const roadhog = {
    id: 3,
    img: roadhog_image,
    label: "Roadhog",
    weigth: 1
}

const winston = {
    id: 4,
    img: winston_image,
    label: "Winston",
    weigth: 1
}

const zarya = {
    id: 5,
    img: zarya_image,
    label: "Zarya",
    weigth: 1
}


const ana = {
    id: 0,
    img: ana_image,
    label: "Ana",
    weigth: 1
}

const lucio = {
    id: 1,
    img: lucio_image,
    label: "Lúcio",
    weigth: 1
}

const mercy = {
    id: 2,
    img: mercy_image,
    label: "Mercy",
    weigth: 1
}

const moira = {
    id: 3,
    img: moira_image,
    label: "Moira",
    weigth: 1
}

const symmetra = {
    id: 4,
    img: symmetra_image,
    label: "Symmetra",
    weigth: 1
}

const zenyatta = {
    id: 5,
    img: zenyatta_image,
    label: "Zenyatta",
    weigth: 1
}


const OffenseHeroes = [doomfist, genji, mccree, pharah, reaper, soldier76, sombra, tracer];
const DefenseHeroes = [bastion, hanzo, junkrat, mei, torbjorn, widowmaker];
const TankHeroes = [dva, orisa, reinhardt, roadhog, winston, zarya];
const SupportHeroes = [ana, lucio, mercy, moira, symmetra, zenyatta];
const Heroes = [OffenseHeroes, DefenseHeroes, TankHeroes, SupportHeroes];

export {
    OffenseHeroes,
    DefenseHeroes,
    TankHeroes,
    SupportHeroes,
    Heroes
}