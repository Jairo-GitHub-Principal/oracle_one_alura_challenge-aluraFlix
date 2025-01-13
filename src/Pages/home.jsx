import { HomeMainStyled,HomeStyled, } from "./styledHome.js"
import Banner from "../componentes/Banner/banner.jsx"
import bannerImagem from "../componentes/Banner/imgbaner/bannerAlura.png"
import Categoria from "../componentes/ReusableComponent/CategoriaMovie/categoriaMovie.jsx"
import ModalEdit from "../componentes/ModalEdit/edit.jsx"
import NovoVideo from "../componentes/NovoVideo/novoVideo.jsx"


const Home = (props) => {
    // outra forma de cocntrolar o estado do modal


   
    


    return (
        <HomeStyled > 
            
                  
            <Banner height="832px" backgroundImage={bannerImagem} />
            <HomeMainStyled>
               <Categoria edit={props.handleEdit} playVideo={props.playVideo}/>
               {props.editVideos ?               
               props.isModalOpen && ( /** isOpem = true ativa o modal , onClose = fecha o modal, videoEdit = video que vai ser editado, ele vai ser passado para o formulario */
                <ModalEdit isOpen={props.isModalOpen} onClose={props.handleCloseModal} videoEdit={props.editVideos} />)
                : <NovoVideo isOpen={props.isModalOpen} onClose={props.handleCloseModal} videoEdit={props.editVideos}/>
                }
            </HomeMainStyled>
        </HomeStyled>
    )
}

export default Home