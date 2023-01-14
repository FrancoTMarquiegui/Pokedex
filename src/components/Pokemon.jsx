import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from'axios';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';
import Pagination from './Paginacion/Pagination';

//https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154

const Pokemon = () => {

  const userName = useSelector(state => state.name);
  const [ pokemonList, setPokemonList ] = useState([]);
  const [ pokemonName, setPokemonName ] = useState("");
  const [ pokemonType, setPokemonType] = useState([]);

 


  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then(res => setPokemonList(res.data.results));

    axios.get(`https://pokeapi.co/api/v2/type/`)
     .then(res => setPokemonType(res.data.results));

  },[])



  

  const searchPokemon = () => {
    //navigate(`/pokemon/${pokemonName}`)
    navigate(`/characters/${pokemonName.toLowerCase()}`)
  }

  const filterType = (e) => {
  
  axios.get(e.target.value)
    .then(res => setPokemonList(res.data.pokemon))
  }


  return (
    <div className='pokemonContent'>
      <div className="linea-red1"></div>
      <div className="linea-black1"></div>
      <div className="welcome"> 
       <p className='welcome'>Welcome {userName}, here you can find your favorite pokemon</p>    
        <input 
            className='inputPokemon'
            type="text" 
            placeholder='search character' 
            value={pokemonName}
            onChange={e => setPokemonName(e.target.value.toLowerCase())}
        />
         <button className='search' onClick={searchPokemon}>Search</button>
        
         <select 
         className='select'
         onChange={filterType} 
         name="" 
         id=""
         >
          {pokemonType.map(pokemonType => (
            <option 
            value={pokemonType.url}
            key={pokemonType.name}
            className='block'
            >
              {pokemonType.name}
            </option>
          ))} 
             
         </select>        
      </div>
     
      <ul className='ul block'> 
      {pokemonList.map((pokemon) => (
         <PokemonCard  
         url={pokemon.url ? pokemon.url : pokemon.pokemon?.url} 
         key={pokemon.url ? pokemon.url : pokemon.pokemon?.url}
         /> 
      ))}
      </ul>
     
    </div>
  );
};

export default Pokemon;