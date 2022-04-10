import React, { Component } from "react";
import { threeDigit } from "./ThreeDigit";
import "./Pokecard.css";
// herarchy 3
export class Pokecard extends Component {

  render() {
  
    // deconstructing the object and assigning its value to variable
    const { id, base_experience, name, type } = this.props.pokemonDetail;
    const avatarBaseURL="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
    const fancyImage=`${avatarBaseURL}${threeDigit(id)}.png`

    
    return (
      <div className="pokecard">
        <div className="pokecard-name">
          <h3>{name}</h3>
        </div>
        <div className="pokecard-avatar">
          <img
            src={fancyImage}
            alt={name}
          />
        </div>
        <div className="pokecard-detail">
          <p className="pokecard-type">Type-{type}</p>
          <p className="pokecard-experience">EXP-{base_experience}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;
let a=[];
for(let i=0;i<=3;i++){
  a.push("ekta")
}

