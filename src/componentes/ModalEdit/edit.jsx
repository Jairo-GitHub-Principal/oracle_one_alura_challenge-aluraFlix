
import style from "./modalEdit.module.css";
import Form from "../ReusableComponent/FormComponent/form";
import { OverLay, ModalContainer, DialogStyled } from "./styleEdit.js";
import { useContext } from "react"
import { VideosContext } from "../../Context/videoContext.jsx"
import { IoIosCloseCircleOutline } from "react-icons/io";



const ModalEdit = ({ isOpen, onClose, videoEdit  }) => {
  // console.log("ModalEdit",videoEdit);
  const { video, setVideo } = useContext(VideosContext)


  if (!isOpen) {// quando isOpen for falso
    return null; //não exibe o modal
  } else {
    return ( // exibe o modal
      <OverLay >
        <DialogStyled />
        <ModalContainer >

        
         <div>
         <button className={style.modalclose} onClick={onClose}>
         <IoIosCloseCircleOutline  size={50} className={style.xclose} />
         </button>

          <Form video={videoEdit}
            videos={video}
            setVideo={setVideo}
            onSubmit={() => console.log("Lista atualizada!")}
            titulo="Editar Card de Video"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            padding="30px"
          />

</div>

         

          
          
           
          

        </ModalContainer>
      </OverLay>
    );
  }


}

export default ModalEdit