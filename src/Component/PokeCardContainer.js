import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./PokeCardContainer.css";
// Heirarchy-2
export class PokeCardContainer extends Component {
  // static defaultProps = {
  //   pokemonDetails: [
  //     { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  //     { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  //     { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  //     { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  //     { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  //     { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  //     { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  //     { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  //   ],
  // };

  render() {
    const { pokemonDetail, isWinner, id,total } = this.props;
    const final = pokemonDetail.map((pokemonDetail) => (
      <Pokecard pokemonDetail={pokemonDetail} />
    ));
    const msg = isWinner && "This hand Wins"

    return (
      <div className="pokecardContainer">
        <h3 className="pokecardContainerHeading">This is PokeMonHand-{id} with total-{total}</h3>
        <h1 className={isWinner && "winner"}>{msg}</h1>
        <div className="pokecardContainer-cards">{final}</div>
      </div>
    );
  }
}

export default PokeCardContainer;
