import styled from "styled-components";


const CardContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 432px;
    height: 325px;
    background-color: #000000;
    color: #ffffff;
    box-sizing: border-box;
    border: 4px solid rgba(107, 209, 255, 1);
    border-radius: 15px 15px ;
    margin:0;
    padding: 0;

    // condição para cor da borda do card
    /** condição para a cor do botão e a cor do texto */
    border: ${({ $categoria }) => {
        switch ($categoria) {
            case "Front End":
                return " 4px solid rgba(107, 209, 255, 1)";
            case "Back End":
                return " 4px solid rgba(0, 200, 111, 1)";
            case "Mobile":
                return " 4px solid rgba(255, 186, 5, 1)";
            default:
                return "black";
        }
    }};
`


const  CardContainerButtonStyled = styled.div`
    display: flex;
     align-items: center;
    justify-content: center;
    gap: 70px;
    width: 100%;
    height: 59px;
    background-color: #000000;
    color: #ffffff;
    box-sizing: border-box;
    border-style: none;
    border-radius: 0px 0px 14px 14px;
    margin:0;
    padding: 0;
`

export { CardContainerStyled,CardContainerButtonStyled };