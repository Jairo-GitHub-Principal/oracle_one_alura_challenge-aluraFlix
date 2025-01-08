import style from "./novoVideo.module.css"
import Form from "../ReusableComponent/FormComponent/form"
import Text from "../ReusableComponent/TextComponent/text"


const NovoVideo = ({ isOpen, onClose }) => {
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
                <button className={style.modalclose} onClick={onClose}>Fechar</button>
                    <Form titulo="Criar Card de Video"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        padding="30px"

                    />
                </div>


            </section>
            </div>
        )
    }
}

export default NovoVideo