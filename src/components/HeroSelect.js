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
    constructor(props) {
        super(props);
        this.parent = props.parent;
    }

    render() {
        let hero_label = Heroes[this.parent.state.type][this.parent.state.value].label;
        let hero_image = Heroes[this.parent.state.type][this.parent.state.value].img;

        return (
            <div>
                <img src={hero_image} alt='Hero'/>
                <br/>
                {hero_label}
            </div>
        );
    }
}



export { HeroSelectionButton, HeroSelectionTypeDropdown, HeroSelectionAvatar };
