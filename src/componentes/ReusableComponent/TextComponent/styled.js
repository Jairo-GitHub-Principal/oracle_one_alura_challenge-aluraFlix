import styled from "styled-components";

const TextStyled = styled.p`
  font-size: ${(props) => props.$size || "16px"};
  font-weight: ${(props) => props.$weight || "normal"};
  color: ${(props) => props.$color || "#000"};
  margin: ${(props) => props.$margin || "0"};
  line-height: ${(props) => props.$lineHeight || "1.5"};
  padding: 10px;
`

const TextContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    max-width:${(props) => props.$maxWidth || "100%"};
    width:${(props) => props.$width || "100%"};
    height:${(props) => props.$height || "54px"};
    border: 1px solid red;
    padding: 10px;
    margin:0;
    
`


export { TextStyled,TextContainerStyled };
