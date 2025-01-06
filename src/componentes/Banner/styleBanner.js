import styled from "styled-components";

const BannerStyled = styled.div`
display: flex;
justify-content: space-between;
position:relative;
width: ${(props) => props.$width || "100%"}; 
height: ${(props) => props.$height || "100%"};
background-image:${(props) => `url(${props.$backgroundImage})`};
background-color: ${(props) => props.$overlayColor || "rgba(0, 0, 0, 0.7)"};
background-blend-mode: multiply; /* Multiplica a imagem pela cor */
background-size: cover;
background-position: center;

`

export {BannerStyled};