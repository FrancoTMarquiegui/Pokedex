import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({url}) => {

  const [ pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(url)
     .then(res => setPokemon(res.data));

  }, []);

  console.log(pokemon);

  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <h2 className='id'>{pokemon.id}</h2>
      <div className='img'> 
      <img src={pokemon.sprites?.front_default} alt="" />
      </div>
      <h1 className='nombre'>{pokemon.name}</h1>
      <div className="linea-card"></div>
      <div className='data'>     
      <p><b>Weigth: </b>{pokemon.weight}</p>
      <p><b>Heigth: </b>{pokemon.height}</p>
      <p><b>Type: </b>{pokemon.types?.[0].type.name}</p>
      </div>
     
    </Link>
  );
};

export default PokemonCard;