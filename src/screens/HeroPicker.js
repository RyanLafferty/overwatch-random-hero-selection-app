import React, { Component } from 'react';
import { bindActionCreators } from 'redux';  
import { connect } from 'react-redux';
import { HeroSelectionButton, HeroSelectionTypeDropdown, HeroSelectionAvatar } from './../components/HeroSelect';
import { RandomGenerator } from './../utils/RandomGenerator';
import * as HeroActions from './../actions/HeroActions'
import './../App.css';
import background from './../res/img/overwatch-background2.jpg';


class HeroPicker extends Component {

  constructor(props) {
    super(props);
    this.gen = new RandomGenerator();
    this.gen.generate(1);
    this.props.actions.setHeroType(0);
    this.props.actions.setHeroIndex(0);
    this.props.actions.setHeroCnt(this.gen.heroCnt);

    console.log(this.props);
  }

  selectRandomHero() {
    console.log('GOT HERE');
    this.gen.generate(this.type);
  }

  render() {
    return (
      <div className="App" style={this.style.appContainer}>
        <div style={this.style.appItem}>
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

  style = {
    appContainer: {
      // Set rules to fill background
      'minHeight': '100%',

      // Set up proportionate scaling
      'width': '100%',
      'height': 'auto',

      // Set up positioning
      'position': 'fixed',
      'top': 0,
      'left': 0,
      'zIndex': -1,

      // Set background image
      'backgroundImage': "url(" + background + ")"
    }
  }
}

function mapStateToProps(state, ownProps) {  
  return {
    hero_type: state.hero_type,
    hero_index: state.hero_index,
    generating: state.generating,
    all: state.all,
    ...ownProps
  }
}

function mapDispatchToProps(dispatch) {  
    return {
      actions: bindActionCreators(HeroActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroPicker); 
