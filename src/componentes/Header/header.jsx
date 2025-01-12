import styles from "./header.module.css"
import { HeaderStyled, NavContainer } from "./styled"
import Image from "../ReusableComponent/ImageComponent/img.jsx"
import Button from "../ReusableComponent/ButtonComponent/button.jsx"
import imgLogo from "../../assets/img/logo/logoAluraFlix.png"
import { Link } from "react-router-dom"
import { GoHome } from "react-icons/go";
import { BiPlusCircle } from "react-icons/bi";


const Header = (props) => {

    const handleClick = () => {
        // event.preventDefault();

        props.criarCardVideo(); // Passa os dados do vídeo para o método edit
    };

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
                        $color="rgba(34, 113, 209, 1)"
                        $border="rgba(34, 113, 209, 1)"
                        $backgroundColor="#000000"
                        buttonSamrtPhone="134px"
                        paddingSamrtPhone="5px"
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
                        $border="rgba(255, 255, 255, 1)"
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