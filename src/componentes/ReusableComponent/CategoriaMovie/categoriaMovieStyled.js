import styled from "styled-components";


const CategoriaContainerStyled = styled.div` // vai conter o titulo da categoria e  o container com os videos
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    align-items:start;
    width: 100%;
    max-width:1356.39px;
    min-height: 429px;
    margin-bottom: 90px;
    background-color: #000000;
    color: #ffffff;
    padding:  0;
`

const CategoriaMovieContainerStyled = styled.section` // vai  conter apenas  o container de videos
    display: flex;
    
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 100%;
    max-width:1356.39px;
    opacity: 0px;
    box-sizing: border-box;
    border: 1px solid yellow;
    margin-top: 40px;
    `
export { CategoriaContainerStyled, CategoriaMovieContainerStyled };