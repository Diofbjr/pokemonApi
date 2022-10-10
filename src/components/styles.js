import styled from 'styled-components';

export const AreaPokemon = styled.div`
    display: inline-block;
    justify-content: center;
    
    
    
    min-width: 200px ;
    min-height: 200px;
    margin: 20px 20px;

    border: 1px solid rgba( 255,255,255, 0.7);
    border-radius: 10px;

`;

export const ListaPokemon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    p{
        color: red;
        font-size: 17px;
        font-weight: bold;
    }

    img{
        width: 150px;
    }
    button{
        display: flex;
        justify-content: end;
        margin-left: auto;
        width: 30px;
        height: 30px;

        background: transparent;
        border: none;
        cursor: pointer;

        
    }
`;

export const Pesquisa = styled.div`


`;