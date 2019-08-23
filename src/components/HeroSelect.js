import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Heroes } from './../utils/Heroes';
import config from './../res/config/config';


const HeroTypeCnt = Object.keys(config).length;

class HeroSelectionButton extends Component {

    constructor(props) {
        super(props);
        console.log('CONFIG: ', config)
        this.parent = props.parent;
    }

    async selectRandomHero() {
        if (this.parent.props.generating === false && this.parent.props.all === false) {
            let heroCnt = this.parent.gen.heroCnt[this.parent.props.hero_type];
            this.parent.props.actions.generateRandomHero(heroCnt);

            console.log('Current Hero Type: ', this.parent.props.hero_type);
            console.log('Current Hero Index: ', this.parent.props.hero_index);
        }
        else if (this.parent.props.generating === false) {
            this.parent.props.actions.generateAllRandomHero(this.parent.gen);

            console.log('Current Hero Type:', this.parent.props.hero_type);
            console.log('Current Hero Index: ', this.parent.props.hero_index);
        }
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
    HERO_TYPES = ["Damage", "Tank", "Support", "All"];

    constructor(props) {
        super(props);
        this.parent = props.parent;
        this.state = {hero_select_value: this.HERO_TYPES[0]};
    }

    handleChange(event, index, value) {
        if (typeof this.parent !== 'undefined' && this.parent) {

            if (index === (HeroTypeCnt)) {
                this.parent.props.actions.setHeroType(index); //need to refactor and remove later
                this.parent.props.actions.setAllHero(true);
            }
            else {
                this.parent.props.actions.setHeroType(index);
                this.parent.props.actions.setHeroIndex(0);
                this.parent.props.actions.setAllHero(false);
            }
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
                      <MenuItem value={"Damage"} primaryText="Damage" />
                      <MenuItem value={"Tank"} primaryText="Tank" />
                      <MenuItem value={"Support"} primaryText="Support" />
                      <MenuItem value={"All"} primaryText="All" />
                    </SelectField>
                </MuiThemeProvider>
            </div>
        );
    }
}

class HeroSelectionAvatar extends Component {
    constructor(props) {
        super(props);
        this.parent = props.parent;
    }

    render() {
        let hero_label = null;
        let hero_image = null;
        if (this.parent.props.hero_type < HeroTypeCnt) {
            // TODO: refactor to use config rather than Heroes object
            hero_label = Heroes[this.parent.props.hero_type][this.parent.props.hero_index].label;
            hero_image = Heroes[this.parent.props.hero_type][this.parent.props.hero_index].img;
        }
        else {
            // TODO: refactor to use config rather than Heroes object
            hero_label = Heroes[0][0].label;
            hero_image = Heroes[0][0].img;
        }

        return (
            <div>
                <img src={hero_image} style={this.portrait_style} alt='Hero'/>
                <br/>
                {hero_label}
            </div>
        );
    }

    portrait_style = {
        'height': '100px',
        'width': '100px',
        'borderRadius': '50%'
    }
}
  
  
export { HeroSelectionButton, HeroSelectionTypeDropdown, HeroSelectionAvatar, HeroTypeCnt };
