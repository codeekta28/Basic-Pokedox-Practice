import "./App.css";
// this propgram is done to practice what you have learned so far

import React, { Component } from "react";
import Pokecard from "./Component/Pokecard";
import PokedoxBox from "./Component/PokedoxBox";
import PokeGame from "./Component/PokeGame";

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <PokedoxBox /> */}
        <PokeGame/>
      </div>
    );
  }
}

export default App;
