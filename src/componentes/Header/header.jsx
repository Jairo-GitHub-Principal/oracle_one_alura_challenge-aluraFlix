import styles from "./header.module.css"
import { HeaderStyled, NavContainer } from "./styled"
import Image from "../ReusableComponent/ImageComponent/img.jsx"
import Button from "../ReusableComponent/ButtonComponent/button.jsx"
import imgLogo from "../../assets/img/logo/logoAluraFlix.png"
import { Link } from "react-router-dom"
import { GoHome } from "react-icons/go";
import { BiPlusCircle } from "react-icons/bi";
import { useState } from "react"



const Header = (props) => {
    const [activeButton, setActiveButton] = useState("home");

    const handleClick = (event) => {
         event.preventDefault();
        setActiveButton("novoVideo");
       
        props.criarCardVideo(); // Passa os dados do vídeo para o método edit
    };

const hundleHome = (event) => {
    setActiveButton("home");
    console.log(activeButton);
    return activeButton
}

  
    return (
        <>
            <HeaderStyled>
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        <Image maxWidth="168px" height="40px" src={imgLogo} alt="Logo AluraFlix" />

                    </Link>
                
                <NavContainer>
                    <Button
                        $fontTablet="1.5rem"
                        $width="180px"
                        $height="54px"
                        $size="16px"
                        $weight="bold"
                        $color="rgba(255, 255, 255, 1)"
                        $border={activeButton === "home" ? "#1675c9" : "#f9f9f9"}
                        $backgroundColor=  "#181515"
                        buttonSamrtPhone="134px"
                        paddingSamrtPhone="5px"
                        activeButton={activeButton}
                        click={hundleHome}
                        
                       

                       

                    ><Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "25px", borderRadius: "30px",outline:"none" }}  >
                       <GoHome size={30} className={styles.buttonHomeMobile} /> 
                       Home</Link></Button>


                    <Button
                        $size="25px"
                        $fontTablet="1.5rem"  
                        $width="180px"
                        $height="54px"
                        $weight="bold"
                        $color="rgba(255, 255, 255, 1)"
                        $border={activeButton === "novoVideo" ? "#1675c9" : "#f9f9f9"}
                        $backgroundColor="#000000"
                        $hide="true"
                        click={handleClick}


                    >
                        
                        Novo Videos

                       
                    </Button>
                    <div >
                    <BiPlusCircle size={60}className={styles.novoVideoMobile}  onClick={handleClick} />
                    </div>
                   
                </NavContainer>

            </HeaderStyled>
        </>
    )
}

export default Header