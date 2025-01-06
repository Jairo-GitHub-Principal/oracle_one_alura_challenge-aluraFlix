import styled from "styled-components";

const OverLay = styled.div`
    position: fixed;    
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`

const DialogStyled = styled.dialog`
 position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
            cursor: pointer;
                &:active{
                transform: scale(1.25); /* Efeito de "pressionado" */
            }
           
        }
    }
    `



export {OverLay, DialogStyled}