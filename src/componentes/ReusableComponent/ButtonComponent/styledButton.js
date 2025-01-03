import styled from "styled-components";

const ButtonStyled = styled.button`
    font-size: ${({ $size }) => $size || "16px"};
    width: ${({ $width }) => $width || "100px"};
    height: ${({ $height }) => $height || "40px"};
    font-weight:${({ $weight }) => $weight || "normal"};
    border: ${({ $border }) => $border ? `solid 1px ${$border}` : "none"};
    box-shadow: ${({ $border }) => $border ? `0px 0px 10px 1px ${$border}` : "none"};
    margin-top: ${({ $marginTop }) => $marginTop || "0"};
    margin-bottom: ${({ $marginBottom }) => $marginBottom || "0"};
    margin: ${({ $margin }) => $margin || "0"};

   padding:${({ $padding }) => $padding || "0"};
    border-radius: 5px;
    cursor: pointer;
    /** condição para a cor do botão e a cor do texto */
    background-color: ${({ $categoria }) => {
        switch ($categoria) {
            case "Front End":
                return "rgba(107, 209, 255, 1)";
            case "Back End":
                return "rgba(0, 200, 111, 1)";
            case "Mobile":
                return "rgba(255, 186, 5, 1)";
            default:
                return "black";
        }
    }};

    color: ${({ $categoria }) => {
        switch ($categoria) {
            case "Frontend":
                return "white";
            case "Backend":
                return "white";
            case "Mobile":
                return "white";
            default:
                return "white";
        }
    }};

    /**font */
    font-family: Source Sans Pro;
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    text-align: center;
    text-underline-position: under;
    text-decoration-skip-ink: none;

     /* Adicionar animação */
     transition: transform 0.2s ease;

&:active {
    transform: scale(0.95); /* Reduz o tamanho para 95% */
}

`


export { ButtonStyled };