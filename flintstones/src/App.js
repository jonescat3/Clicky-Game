// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import Title from './components/Title';
// import Stones from './components/Flintstones/Flintstones';
// import Wrapper from './components/Wrapper/wrapper';
// import './App.css';
// import Characters from "./flintstones.json";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import flintstones from "./flintstones.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FlintstoneCard from "./Components/FlintstoneCard";
import "./App.css";

// shuffle function from stackoverflow
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


class App extends Component {

  state = {
    flintstones,
    score: 0,
    topScore: 0,
    clickedCharacters: []
  };

  clickedImage = id => {
    // assign the state of the empty array to a let to be updated
    let clickedCharacters = this.state.clickedCharacters;
    let score = this.state.score;
    let topScore = this.state.topScore;

    // if the clicked image has an id of the indexed characters
    if (clickedCharacters.indexOf(id) === -1) {
      // push that id into that id into the array to be stored
      clickedCharacters.push(id);
      console.log(clickedCharacters);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.makeShuffle();
    } else if (this.state.score === 12) {
      alert("You win, you clicked each character with out clicking doubles")
      this.setState({
        score: 0,
        clickedCharacters: []
      });
    } else {
      this.setState({
        score: 0,
        clickedCharacters: []
      });
      console.log("duplicate")
      alert("Sorry you clicked the same person twice, start over")
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      })
    } 
  }

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // setState updates a components states
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({ characters: shuffle(Title) })
  }

  // reset = () => {
  //   this.setState({ score: 0 })
  // }
  

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Title />
        <Wrapper>
          {this.state.characters.map(character => (
            <flintstones
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;

