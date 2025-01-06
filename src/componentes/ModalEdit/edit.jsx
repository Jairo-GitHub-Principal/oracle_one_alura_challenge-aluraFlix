
import style from "./modalEdit.module.css";
import {  useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { VideosContext } from "../Context/videoContext";
import Form from "../ReusableComponent/FormComponent/form";
import { Link } from "react-router-dom";



const ModalEdit = ({isOpen,onClose, videoEdit }) => {

  
  
  
    if (!isOpen) {
      return null; // Retorna null se o modal estiver fechado
    }else{
      return (
        <div className={style.overlay}>
          <div className={style.modalContent}>
            {/* <h1>Categoria: {videoFilter.categoria}  </h1>
            <h1>ID: {videoFilter.id}</h1>
            <h1>src: {videoFilter.src}</h1>
            */}
            <button className={style.modalclose} onClick={onClose}>
          
            Close
           
            </button> 

            <Form video={videoEdit}/>
            
            
          </div>
        </div>
      );
    }
 
    
}   

export default ModalEdit