import React, { Component } from 'react';
import { HeroSelectionButton, HeroSelectionTypeDropdown, HeroSelectionAvatar } from './../components/HeroSelect';
import './../App.css';
import { RandomGenerator } from './../utils/RandomGenerator';


class HeroPicker extends Component {
  //TODO - move into constructor
  gen = null;

  constructor(props) {
    super(props);
    this.gen = new RandomGenerator();
    this.gen.generate(1);
    this.type = 0;
    this.state = {
      type: 0,
      value: 0
    };

  }

  selectRandomHero() {
    console.log('GOT HERE');
    this.gen.generate(this.type);
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>Overwatch Hero Selection</h2>
        </div>
        <div>
          <HeroSelectionAvatar parent={this}/>
          <HeroSelectionTypeDropdown parent={this}/>
          <br/>
          <HeroSelectionButton parent={this}/>
        </div>
      </div>
    );
  }
}

export default HeroPicker;
