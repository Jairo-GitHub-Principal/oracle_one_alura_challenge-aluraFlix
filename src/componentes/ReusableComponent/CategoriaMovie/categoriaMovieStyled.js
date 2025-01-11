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
    overflow-x:auto;
   
    opacity: 0px;
    box-sizing: border-box;
    margin-top: 40px;

    // personalizar o scrollbar 
   
     /* Personalização da barra de rolagem para Chrome, Edge e Safari */
  &::-webkit-scrollbar {
    height: 5px; /* Altura da barra de rolagem horizontal */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor do controle da barra */
    border-radius: 5px; /* Bordas arredondadas */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Cor ao passar o mouse */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Cor do fundo da barra */
  }

  /* Estilo para Firefox */
  scrollbar-width: none; /* Reduz a largura no Firefox */
  scrollbar-color: #888 #f1f1f1; /* Controle e fundo no Firefox */
        
   

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