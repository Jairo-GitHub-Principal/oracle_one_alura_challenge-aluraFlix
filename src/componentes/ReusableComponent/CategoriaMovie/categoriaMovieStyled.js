import styled from "styled-components";


const CategoriaContainerStyled = styled.div` // vai conter o titulo da categoria e  o container com os videos
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    align-items:start;
    width: 100%;
    max-width:1356.39px;
    min-height: 200px;
    margin-bottom: 90px;
    background-color: #000000;
    color: #ffffff;
    padding:  0;

    @media(max-width:880px){
       align-items: center;
    }

    
        

    
`

const CategoriaMovieContainerStyled = styled.section` // vai  conter apenas  o container de videos
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
    overflow-x: scroll;
   
    opacity: 0px;
    box-sizing: border-box;
    margin-top: 40px;
        
   

    @media (max-width: 420px) {
        flex-direction: row;
        flex-wrap: nowrap; /* Desabilita quebra de linha */
        overflow-x: scroll; /* Habilita rolagem horizontal */
        gap: 10px; /* Espaçamento entre os itens */
        padding: 10px; /* Espaçamento interno */
        justify-content: flex-start;
        /* Opcional: remover borda para melhorar o layout */       
    }
    
    `
export { CategoriaContainerStyled, CategoriaMovieContainerStyled };