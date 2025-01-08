
import style from "./modalEdit.module.css";
import Form from "../ReusableComponent/FormComponent/form";
import {OverLay,ModalContainer,DialogStyled} from "./styleEdit.js";



const ModalEdit = ({isOpen,onClose, videoEdit }) => {

  
  
  
    if (!isOpen) {// quando isOpen for falso
      return null; //não exibe o modal
    }else{
      return ( // exibe o modal
        <OverLay >
          <DialogStyled/>
          <ModalContainer >
                     
            <button className={style.modalclose} onClick={ onClose}>Fechar</button>

            <Form video={videoEdit} 
                onSubmit={() => console.log("Lista atualizada!")}
                titulo="Editar Card de Video"
                 display="flex"
                 flexDirection="column"
                 alignItems="center"
                 justifyContent="space-between"
                 padding="30px"
            />
            
            
          </ModalContainer>
        </OverLay>
      );
    }
 
    
}   

export default ModalEdit