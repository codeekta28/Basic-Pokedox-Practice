import React, { Component } from "react";
import PokeCardContainer from "./PokeCardContainer";
import "./PokeGame.css"
import { random } from "./RandomIndex";

export class PokeGame extends Component {
  static defaultProps = {
    pokemonDetails: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };
  render() {
    const { pokemonDetails } = this.props;
    function fillingArray(activeArray) {
      for (let i = 0; i <= 3; i++) {
        activeArray.push(pokemonDetails[random(pokemonDetails.length)]);
      }
      return activeArray;
    }
    const hand1 = [];
    const hand2 = [];
    fillingArray(hand1);
    fillingArray(hand2);
  
   const hand1Exp=hand1.reduce((accum,item)=>accum+item.base_experience,0);
   const hand2Exp=hand2.reduce((accum,item)=>accum+item.base_experience,0);
   const winnerhand1=hand1Exp>hand2Exp?true:false
   const winnerhand2=hand2Exp>hand1Exp?true:false
   

    return <div className="pokegame">
<PokeCardContainer pokemonDetail={hand1} isWinner={winnerhand1} id={1} total={hand1Exp}/>
<PokeCardContainer pokemonDetail={hand2} isWinner={winnerhand2} id={2} total={hand2Exp}/>
    </div>;
  }
}

export default PokeGame;
