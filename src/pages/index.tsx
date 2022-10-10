

import GlobalStyle from "./globalStyles";
import { Container, Pokemon } from "./styles";

import { Fragment, useState, useEffect } from "react";

import axios from 'axios';
import DisplayPokemon from "../components";


export default function Home() {

const [pokemon, setPokemon] = useState([]);//array de api



  const get10Pokemon = () =>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then((response)=>{
      console.log(response);
      
      setPokemon(response.data.results)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    get10Pokemon();
  })


  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Pokemon>
          <DisplayPokemon pokemon={pokemon}/>
        </Pokemon>
      </Container>
    </Fragment>
  );
  
}

