import React, { Component } from 'react';
import PokeCardContainer from './PokeCardContainer';
import "./PokedoxBox.css"
// heirachy 1

export class PokedoxBox extends Component {
  render() {
    return <div className='pokedoxBox'>
        <h3 className='pokedoxBox-heading'>Pokebox</h3>
        <PokeCardContainer/>
    </div>;
  }
}

export default PokedoxBox;
