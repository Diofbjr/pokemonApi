import React from 'react';

import { AreaPokemon, Pesquisa} from './styles';
import { Fragment } from 'react';

import Pokemon from './Pokemon';






const DisplayPokemon = ({ pokemon }) => {

    return (
        
            <div>
                {pokemon.map((val, idx) =>
                    <Fragment>
                        <AreaPokemon>
                            <Pokemon key={idx} thisPokemon={val} />
                        </AreaPokemon>
                    </Fragment>

                )
                }
            </div>
        
    )
}

export default DisplayPokemon;