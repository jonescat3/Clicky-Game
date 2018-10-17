// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import Title from './components/Title';
// import Stones from './components/Flintstones/Flintstones';
// import Wrapper from './components/Wrapper/wrapper';
// import './App.css';
// import Characters from "./flintstones.json";

import React, { Component } from "react";
import FlintstoneCard from "./components/FlintstoneCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import flintstones from "./flintstones.json";
import "./App.css";

class App extends Component {
  // Setting this.state.flintstones to the flintstones json array
  state = {
    flintstones
  };

  removeFlintstones = id => {
    // Filter this.state.flintstones for flintstones with an id not equal to the id being removed
    const flintstones = this.state.flintstones.filter(flintstones => flintstones.id !== id);
    // Set this.state.flintstones equal to the new flintstones array
    this.setState({ flintstones });
  };

  // Map over this.state.flintstones and render a FlintstoneCard component for each flintstones object
  render() {
    return (
      <Wrapper>
        <Title>Flintstones List</Title>
        {this.state.flintstones.map(flintstones => (
          <FlintstoneCard
            removeFlintstones={this.removeFlintstones}
            name={flintstones.name}
            image={flintstones.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


// const characters=['Fred Flintstone', 'Wilma Flintstone', 'Pebbles Flinstone', 'Dino', 'Barney Rubble', 'Betty Rubble' 'Bamm-Bamm Rubble', 'The Great Gazoo', 'Mr Slate', 'Arnold', 'Hoppy', 'Bird' ]
