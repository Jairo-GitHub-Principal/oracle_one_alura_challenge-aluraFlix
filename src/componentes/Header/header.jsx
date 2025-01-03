import { HeaderStyled, NavContainer } from "./styled"
import Text from "../ReusableComponent/TextComponent/text.jsx"
import Image from "../ReusableComponent/ImageComponent/img.jsx"
import Button from "../ReusableComponent/ButtonComponent/button.jsx"
import imgLogo from "../../assets/img/logo/logoAluraFlix.png"
const Header = () => {
    return (
        <>
            <HeaderStyled>
                <Image maxWidth="168px"  height="40px" src={imgLogo} alt="Logo AluraFlix" />
                   
                <NavContainer>
                <Button 
                width="180px" 
                height="54px" 
                size="16px" 
                weight="bold" 
                color="rgba(34, 113, 209, 1)"
                border="rgba(34, 113, 209, 1)"
                backgroundColor="#000000"
                >Home</Button>


                <Button  
                width="180px" 
                height="54px" 
                weight="bold"
                color="rgba(255, 255, 255, 1)"
                border="rgba(255, 255, 255, 1)"
                backgroundColor="#000000"
                                
                >Novo Video</Button>
                </NavContainer>
                
            </HeaderStyled>
        </>
    )
}

export default Header