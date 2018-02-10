import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Heroes } from './../utils/Heroes';

const avstyle = {margin: 5};

class HeroSelectionButton extends Component {

    constructor(props) {
        super(props);
        this.parent = props.parent;
    }

    async selectRandomHero() {
        console.log('Current type:', this.parent.state.type);
        let res = await this.parent.gen.generate(this.parent.state.type);
        this.parent.setState({value: res})
        console.log('Parent value: ', this.parent.state.value);
    }

    render() {
        return (
            <MuiThemeProvider>
                <RaisedButton label="Select" onClick={this.selectRandomHero.bind(this)}/>
            </MuiThemeProvider>
        );
    }
}


class HeroSelectionTypeDropdown extends Component {
    HERO_TYPES = ["Offense", "Defense", "Tank", "Support"];

    constructor(props) {
        super(props);
        this.parent = props.parent;
        this.state = {hero_select_value: this.HERO_TYPES[0]};
    }

    handleChange(event, index, value) {
        if (typeof this.parent !== 'undefined' && this.parent) {
            this.parent.setState({type: index});
            this.parent.setState({value: 0});
            this.setState({hero_select_value: this.HERO_TYPES[index]});
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <SelectField
                      id="hero-type-selection"
                      floatingLabelText=""
                      onChange={this.handleChange.bind(this)}
                      value={this.state.hero_select_value}
                    >
                      <MenuItem value={"Offense"} primaryText="Offense" />
                      <MenuItem value={"Defense"} primaryText="Defense" />
                      <MenuItem value={"Tank"} primaryText="Tank" />
                      <MenuItem value={"Support"} primaryText="Support" />
                    </SelectField>
                </MuiThemeProvider>
            </div>
        );
    }
}

class HeroSelectionAvatar extends Component {
    HERO_TYPES = ["Offense", "Defense", "Tank", "Support"];
    NO_HERO_IMG = require('./../res/img/NoHeroSelected.png');
    IMG_DIR = './../res/img/heroes/';

    constructor(props) {
        super(props);
        this.parent = props.parent;
        this.config = require('./../res/config/config.json');
        this.heroes = [];
        this.importHeros();
        this.state = {
            img: this.NO_HERO_IMG,
            label: 'No Hero Selected'
        };
        console.log(this.config);
    }

    importHeros() {
        for (let i in this.HERO_TYPES) {
            let heroes = Object.keys(this.config[this.HERO_TYPES[i]]);
            this.heroes[i] = heroes;

            for (let j in heroes) {
                try {
                    this.config[this.HERO_TYPES[i]][heroes[j]].img  = Heroes[i][j].img;
                    console.log('Loaded: ', this.config[this.HERO_TYPES[i]][heroes[j]].img);
                }
                catch (err) {
                    console.log(err, "\n", 'Failed to load: ', Heroes[i][j]);
                    this.config[this.HERO_TYPES[i]][heroes[j]].img = this.NO_HERO_IMG;
                }
            }
        }

        console.log(this.config);
        console.log(this.heroes);
        console.log(this.config[this.HERO_TYPES[this.parent.state.type]][this.heroes[this.parent.state.type][this.parent.state.value]].img);
    }

    render() {
        let hero_type = this.HERO_TYPES[this.parent.state.type];
        let hero_label = this.heroes[this.parent.state.type][this.parent.state.value];
        return (
            <div>
                <img src={this.config[hero_type][hero_label].img} alt='Hero'/>
                <br/>
                {hero_label}
            </div>
        );
    }
}



export { HeroSelectionButton, HeroSelectionTypeDropdown, HeroSelectionAvatar };
