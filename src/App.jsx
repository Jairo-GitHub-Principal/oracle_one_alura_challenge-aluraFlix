
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home.jsx"
import Videos from './Pages/Videos.jsx';
import Header from "./componentes/Header/header.jsx";
import Footer from './componentes/Footer/footer.jsx';
import Container from './componentes/Container/container.jsx';
import VideoProvider from './Context/videoContext.jsx';
import ModalEdit from './componentes/ModalEdit/edit.jsx';
import NovoVideo from './componentes/NovoVideo/novoVideo.jsx';
import ModalVideo from './componentes/ModalVideo/modalVideo.jsx';
import { useState } from 'react';

function App() {
  const [editVideos, setEditVideos] = useState([null]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado que controla a visibilidade do modal
  const [isModalOpenNovoVideo, setIsModalOpenNovoVideo] = useState(false);
  const [isModalVideoOpen, setIsModalVideo] = useState(false);
  const [idPlay, setIdPlay] = useState(null);
  const [urlPlay,setUrlPlay] = useState(null);







  const handleEdit = (video) => {
    // essa função vai decer até chegar no card, e la vai ser chamada, e pra ela vai ser  passado os video do card de video que sera editado
    // console.log("APP Edit chegou", video);
    setEditVideos(video); // os video do card que serra editado agora vai ser passado para  o modal e do modal para o formulario
    setIsModalOpen(true); // ativa a abertura do modal

    // console.log("HOMEVideo para editar: ", video);
  };

  const criarCardVideo = () => {

    // console.log("CriarCardVideo chegou no APP");
    setIsModalOpenNovoVideo(true);
  };

  
  const playVideo = (id) => {
   /** abaixo temos uma  expressão regular de uma  url, que sera usada */
   const isUrl = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?(#.*)?$/;

   setIsModalVideo(true);

   if (isUrl.test(id)) { /**se for uma url chama o setUrlPlay, se não chama o setIdPlay  */
    setUrlPlay(id);

   }else{
    setIdPlay(id);
   }

  //  console.log("APP PlayVideo", id);
    
  };

 

  const handleCloseModal = () => { // fechar o modal
    // console.log("handleCloseModal");
    setIsModalOpen(false);
    setIsModalOpenNovoVideo(false);
    setIsModalVideo(false);
    setEditVideos(null);
  };






  return (
    <VideoProvider>
      <BrowserRouter className="app" >
        {isModalOpen && ( /** isOpem = true ativa o modal , onClose = fecha o modal, videoEdit = video que vai ser editado, ele vai ser passado para o formulario */
          <ModalEdit isOpen={isModalOpen} onClose={handleCloseModal} videoEdit={editVideos} />
        )}

        {isModalOpenNovoVideo && ( /** isOpem = true ativa o modal , onClose = fecha o modal, videoEdit = video que vai ser editado, ele vai ser passado para o formulario */
          <NovoVideo isOpen={isModalOpenNovoVideo} onClose={handleCloseModal} />
        )}

        {isModalVideoOpen && (
          <ModalVideo isOpen={isModalVideoOpen} onClose={handleCloseModal} idPlay={idPlay} urlPlay={urlPlay}  />
        )

        }
        <Container>

          <Header
            criarCardVideo={criarCardVideo}
            handleCloseModal={handleCloseModal}
          />

          <Routes>
            <Route path="/" element={
              <Home
                editVideos={editVideos}
                setEditVideos={setEditVideos}
                handleEdit={handleEdit}
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
                playVideo={playVideo}
              />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="*" element={<Home />} />
            {/* <Route path="/:id" element={<Player />} /> */}
            {/* <Route path='/edit/:id' element={<ModalEdit />} /> */}
            {/* <Route path='/novovideo' element={<NovoVideo />} /> */}

          </Routes>

          <Footer />

        </Container>
      </BrowserRouter>
    </VideoProvider>
  )
}

export default App
