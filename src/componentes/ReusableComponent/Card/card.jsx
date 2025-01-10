import { CardContainerStyled, CardContainerButtonStyled } from "./cardStyled.js";
import Button from "../ButtonComponent/button.jsx";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaExpand } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useApi}  from "../../Hooks/fetchApi/useApi.js"

import { useContext, useEffect } from "react";
import {VideosContext} from "../../Context/videoContext.jsx"





const Card = ({ edit, id, categoria, src,atualizarLista }) => {

    const {deleteVideo} = useApi();
    const handleEditClick = (event) => {
        
        const videoData = {id, categoria, src };
        edit(videoData); // Passa os dados do vídeo para o método edit
    };
   
    const handleDeleteClick =  () => {
       // Passa o ID do vídeo para o método deleteVideo
       const idVideo = Number(id);
       console.log("Delete Card",id);
        deleteVideo(idVideo);
        atualizarLista(id);
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
                
                
                <Button click={handleDeleteClick} $size={"2rem"}>
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
                     <CiEdit/>

                 </Button>
                
               
            </CardContainerButtonStyled>
        </CardContainerStyled>
    );
};


export default Card;