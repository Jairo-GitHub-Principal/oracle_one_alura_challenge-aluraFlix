import style from "./novoVideo.module.css"
import Form from "../ReusableComponent/FormComponent/form"
import Text from "../ReusableComponent/TextComponent/text"
import { useContext } from "react"
import { VideosContext } from "../../Context/videoContext.jsx"
import { IoIosCloseCircleOutline } from "react-icons/io";



const NovoVideo = ({ isOpen, onClose }) => {
    const { video, setVideo } = useContext(VideosContext) /** usado para passar o setVideo para  o metodo 
                                                              saveVideo, que o passara pa getVideos, pra 
                                                           atualizar o estdo, apos salvar o video ou atualizar*/

    if (!isOpen) {// quando isOpen for falso
        return null; //não exibe o modal
    } else {
        return (
            <div className={style.overlay}>

            <section className={style.novoVideoContainer}>
               

                <div className={style.novoVideoTitulo}>

                    <h1><Text size="60px" weight="900" color="white" family="Roboto" lineHeight="1.5">NOVO VÍDEO</Text>  </h1>
                    <Text size="25px" weight="400" color="white" family="Roboto" lineHeight="23px" textAline="center">Complete o formulário para criar um novo card de vídeo.</Text>

                </div>

                <div className={style.novoVideoForm}>
                <button className={style.modalclose} onClick={onClose}>
                    <IoIosCloseCircleOutline  size={50} className={style.xclose} />
                </button>
                    
                    <Form titulo="Criar Card de Video"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        padding="30px"
                        setVideo={setVideo}

                    />
                </div>


            </section>
            </div>
        )
    }
}

export default NovoVideo