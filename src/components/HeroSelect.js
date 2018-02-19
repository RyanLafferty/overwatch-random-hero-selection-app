import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Heroes } from './../utils/Heroes';


const HeroTypeCnt = Object.keys(Heroes).length;

class HeroSelectionButton extends Component {

    constructor(props) {
        super(props);
        this.parent = props.parent;
    }

    async selectRandomHero() {
        if (this.parent.props.generating === false && this.parent.props.hero_type < HeroTypeCnt) {
            let heroCnt = this.parent.gen.heroCnt[this.parent.props.hero_type];
            this.parent.props.actions.generateRandomHero(heroCnt);

            console.log('Current Hero Type: ', this.parent.props.hero_type);
            console.log('Current Hero Index: ', this.parent.props.hero_index);
        }
        else if (this.parent.props.generating === false) {
            let res = await this.parent.gen.all_generate();

            this.parent.props.actions.setHeroType(res[0]);
            this.parent.props.actions.setHeroIndex(res[1]);
            console.log('Current type:', this.parent.props.hero_type);
            console.log('Parent value: ', this.parent.props.hero_index);
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
    HERO_TYPES = ["Offense", "Defense", "Tank", "Support", "All"];

    constructor(props) {
        super(props);
        this.parent = props.parent;
        this.state = {hero_select_value: this.HERO_TYPES[0]};
    }

    handleChange(event, index, value) {
        if (typeof this.parent !== 'undefined' && this.parent) {

            this.parent.props.actions.setHeroType(index);
            this.parent.props.actions.setHeroIndex(0);
            console.log('parent: ', this.parent);
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
            hero_label = Heroes[this.parent.props.hero_type][this.parent.props.hero_index].label;
            hero_image = Heroes[this.parent.props.hero_type][this.parent.props.hero_index].img;
        }
        else {
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
  
  
export { HeroSelectionButton, HeroSelectionTypeDropdown, HeroSelectionAvatar };
