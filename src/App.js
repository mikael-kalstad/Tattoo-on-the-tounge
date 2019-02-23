import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import StartMenu from './components/Pages/StartMenu';
import QuotePage from './components/Pages/QuotePage';
import CategoryData from './Categories.json';

import movieLogo from './img/movie.png';
import terminal from './img/terminal.png';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Abril+Fatface');
    font-family: 'Abril Fatface', sans-serif;
  }
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      quoteCategory: "",
      color: this.randomHSL(),
    }
  }

  setQuoteCategory = (category) => this.setState({ quoteCategory: category });

  // Will find appropriate HSL color
  randomHSL = () => {
    let random = (min, max) => Math.round(min + Math.random()*(max-min));

    // Will only pick colors that have good contrast with white
    let hue = random(0, 360);
    let saturation = random(30, 100);
    let lightness = random(70, 80);

    return 'hsl('+hue+", "+saturation+"%, "+lightness+"%)";
  }

  updateColor = () => this.setState({ color: this.randomHSL() });

  goBack = () => this.setState({ quoteCategory: "" });

  categoryNames = ["Movie", "Programming", "Movie", "Programming"];
  categoryLogos = [movieLogo, terminal, movieLogo, terminal, movieLogo, terminal];

  render() {    
    return (
      <>
        {(this.state.quoteCategory === "") ? 
            <StartMenu 
              categoryData={CategoryData}
              onClick={this.setQuoteCategory}
              quoteCategories={this.quoteCategories}
            /> 
          :
            <QuotePage 
              color={this.state.color}
              updateColor={this.updateColor}
              searchbar={true}
              quoteCategory={this.state.quoteCategory}
            />
        }
      </>
    );
  }
}

export default App;