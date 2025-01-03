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
`

const  CardVideoStyled = styled.video`
    max-width:${(props) => props.$maxWidth || "100%"};
    width:"100%";
    height:260px;
    border: 5px solid red;
    background: rgba(0, 0, 0, 0.1);    /* border: 1px solid red; */
    border-radius: 14px 14px 0px 0px;
    box-sizing: border-box;
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
    border-radius: 0px 0px 14px 14px;
    margin:0;
    padding: 0;
`

export { CardContainerStyled,CardVideoStyled,CardContainerButtonStyled };