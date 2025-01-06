import { CardContainerStyled, CardContainerButtonStyled } from "./cardStyled.js";
import Button from "../ButtonComponent/button.jsx";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaExpand } from "react-icons/fa";
import { Link } from "react-router-dom";





const Card = ({ edit, id, categoria, src }) => {
    const handleEditClick = (event) => {
        event.preventDefault();
        const videoData = {id, categoria, src };
        edit(videoData); // Passa os dados do vídeo para o método edit
    };
   
    return (
        <CardContainerStyled $categoria={categoria} >
                              

            <iframe
                width="100%"
                height="100%"
                controls
                src={src}
                allowFullScreen
            />
            <CardContainerButtonStyled>
                
                
                <Button $size={"2rem"}>
                    <MdDelete />
                </Button>
                
                
                <Button $size={"1.5rem"}>
                    <Link style={{ textDecoration: "none", color: "white" }}
                        to={`/${id}`}
                    >
                    <FaExpand />
                    </Link>
                   
                </Button>
                
                     <Button 
                     $size={"2.3rem"} 

                     click={handleEditClick}>

                          {/* <Link 
                                style={{ textDecoration: "none", color: "white" }}
                                to={`/edit/${props.id}`}
                                // state={{ vd }} // Passando o objeto vd como estado
                                > </Link> */}
                                <CiEdit/>
                                
                   
                    
                 </Button>
                
               
            </CardContainerButtonStyled>
        </CardContainerStyled>
    );
};


export default Card;