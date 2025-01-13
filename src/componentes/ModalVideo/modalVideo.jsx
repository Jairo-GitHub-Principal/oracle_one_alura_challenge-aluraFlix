
import Player from "../Player/player.jsx";
import styles from "./modalVideo.module.css"

const ModalVideo = ({ isOpen, onClose,idPlay }) => {

  
  if (!isOpen) {// quando isOpen for falso
    return null; //não exibe o modal
  } else {
    return ( // exibe o modal
      <div className={styles.overlay} >

          <dialog className={styles.dialogStyled}></dialog>

               <div className={styles.modalContainer} >
                    <button className={styles.modalclose} onClick={onClose}>Fechar</button>
                    <div className={styles.containerVideo}>
                     <Player idPlay={idPlay}/> 
                     </div>

              </div>

      </div>





    );
  }
}






export default ModalVideo