import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonId = () => {
  
  const [ pokemon, setPokemon ] = useState([]);

  const {id} = useParams();

  useEffect (() => {
     axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokemon(res.data));
  },[]);


  return (
    <div className='card'>
     <div className='name'> 
        <img src={pokemon.sprites?.front_default} alt="" />
        <h1>{pokemon.name}</h1>
      </div>
      <div className='linea'></div>
      <div className='linea2'></div>
    <div className='info'> 

      <div className='weigth'> 
        <h3>Weight</h3>
        <p>{pokemon.weight}</p>
      </div>

      <div className="height"> 
        <h3>Height</h3>
        <p>{pokemon.height}</p>
      </div>
    </div>
  <div className='box'> 
    <div className='type'>
      <h3>Type</h3>
      <p>{pokemon.types?.[0].type.name}</p>
      <p></p>
    </div>
    <div className="abilities">
      <h3>Abilities</h3>
      <p>{pokemon.abilities?.[0].ability.name}</p>
    </div>
    </div>
  </div>
  );
};

export default PokemonId;