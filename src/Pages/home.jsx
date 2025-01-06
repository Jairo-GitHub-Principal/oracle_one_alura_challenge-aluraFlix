import { HomeMainStyled,HomeStyled, } from "./styledHome.js"
import Banner from "../componentes/Banner/banner.jsx"
import bannerImagem from "../componentes/Banner/imgbaner/bannerAlura.png"
import Categoria from "../componentes/ReusableComponent/CategoriaMovie/categoriaMovie.jsx"
import { useEffect, useState } from "react"
import ModalEdit from "../componentes/ModalEdit/edit.jsx"


const Home = () => {
    // outra forma de cocntrolar o estado do modal


    const [editVideos, setEditVideos] = useState([null]);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado que controla a visibilidade do modal
  console.log("App editVideos apos declarar",editVideos);
 
  useEffect(() => {
    if (editVideos) {
      console.log("UseEffect editVideos",editVideos);
    }
  },[editVideos])
 

  
  
  const handleEdit = (video) => {  // essa função vai decer até chegar no card, e la vai ser chamada, e pra ela vai ser  passado os video do card de video que sera editado
    setEditVideos(video); // os video do card que serra editado agora vai ser passado para  o modal e do modal para o formulario
    setIsModalOpen(true); // ativa a abertura do modal

    console.log("HOMEVideo para editar: ", video);
};

const handleCloseModal = () => { // fechar o modal
    setIsModalOpen(false);
    setEditVideos(null);
};


    return (
        <HomeStyled > 
            
                  
            <Banner height="832px" backgroundImage={bannerImagem} />
            <HomeMainStyled>
               <Categoria edit={handleEdit} />
               {isModalOpen && ( /** isOpem = true ativa o modal , onClose = fecha o modal, videoEdit = video que vai ser editado, ele vai ser passado para o formulario */
                <ModalEdit isOpen={isModalOpen} onClose={handleCloseModal} videoEdit={editVideos} />
            )}
            </HomeMainStyled>
        </HomeStyled>
    )
}

export default Home