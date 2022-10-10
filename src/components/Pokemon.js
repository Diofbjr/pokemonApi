import {useEffect, useState, Fragment} from 'react';

import {ListaPokemon} from './styles';

import axios from 'axios';





const Pokemon = ({thisPokemon}) =>{
    

    const[onePokemon, setOnePokemon] = useState({
        id: "",
        name: "",
        sprites:{
            front_default: ""
        }
    });
    const getPokemon = (url) =>{
        axios.get(url)
        .then((response)=>{
            console.log(response);
            setOnePokemon(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getPokemon(thisPokemon.url)
    })

    



    return(
        <Fragment>
            <ListaPokemon>
            <img src={onePokemon.sprites.front_default}/>
            <p>{onePokemon.name}</p>
                
                

            </ListaPokemon>
        </Fragment>
        
    )
}




export default Pokemon;