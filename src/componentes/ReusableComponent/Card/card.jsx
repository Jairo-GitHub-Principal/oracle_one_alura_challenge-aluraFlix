import { CardContainerStyled, CardContainerButtonStyled } from "./cardStyled.js";
import Button from "../ButtonComponent/button.jsx";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaExpand } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";

import { Link } from "react-router-dom";
import {useApi}  from "../../Hooks/fetchApi/useApi.js"

import { useContext, useEffect } from "react";
import {VideosContext} from "../../Context/videoContext.jsx"





const Card = ({ edit, id,titulo, categoria,img,src,descricao,atualizarLista }) => {
    // console.log("Card",{ id:id,titulo:titulo, categoria:categoria,img:img,src:src,desccricao:descricao});

    const {deleteVideo} = useApi();
    const handleEditClick = (event) => {
        
        const videoData = {id,titulo, categoria,img, src,descricao };
        edit(videoData); // Passa os dados do vídeo para o método edit
    };

    const play = (event) => {
        console.log("play");
    }
   
    const handleDeleteClick =  () => {
       // Passa o ID do vídeo para o método deleteVideo
       const idVideo = Number(id);
       console.log("Delete Card",id);
        deleteVideo(idVideo);
        atualizarLista(id);
    };

       


   


   
    return (
        <CardContainerStyled $categoria={categoria} >
                              
             <img style={{borderRadius:"10px"}} width={"100%"} height={"100%"} src={img} alt={titulo} />
            {/* <iframe
                width="100%"
                height="100%"
                src={src}
                allowFullScreen
            /> */}
            <CardContainerButtonStyled>
                
                
                <Button click={handleDeleteClick} $size={"2rem"}>
                    <MdDelete />
                </Button>
                
                
                <Button $size={"1.5rem"} click={play}>
                    <Link style={{ textDecoration: "none", color: "white" }}
                        to={`/${id}`}
                    >
                   <FaRegCirclePlay  size={"30px"}/>
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