
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home.jsx"
import Videos from './Pages/Videos.jsx';
import Header from "./componentes/Header/header.jsx";
import Footer from './componentes/Footer/footer.jsx';
import Container from './componentes/Container/container.jsx';
import VideoProvider from './componentes/Context/videoContext.jsx';
import Player from './componentes/Player/player.jsx';
import ModalEdit from './componentes/ModalEdit/edit.jsx';
import NovoVideo from './componentes/NovoVideo/novoVideo.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [editVideos, setEditVideos] = useState([null]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado que controla a visibilidade do modal
  const [isModalOpenNovoVideo, setIsModalOpenNovoVideo] = useState(false);
 

  




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

  const handleCloseModal = () => { // fechar o modal
    // console.log("handleCloseModal");
    setIsModalOpen(false);
    setIsModalOpenNovoVideo(false);''
    setEditVideos(null);
  };






  return (
    <VideoProvider>
    <BrowserRouter className="app" >
       {isModalOpen && ( /** isOpem = true ativa o modal , onClose = fecha o modal, videoEdit = video que vai ser editado, ele vai ser passado para o formulario */
          <ModalEdit isOpen={isModalOpen} onClose={handleCloseModal} videoEdit={editVideos} />
        )}

        {isModalOpenNovoVideo && ( /** isOpem = true ativa o modal , onClose = fecha o modal, videoEdit = video que vai ser editado, ele vai ser passado para o formulario */
          <NovoVideo isOpen={isModalOpenNovoVideo} onClose={handleCloseModal }  />
        )}
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
              />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/:id" element={<Player />} />
            <Route path="*" element={<h1>Página não encontrada</h1>} />
            <Route path='/edit/:id' element={<ModalEdit />} />
            <Route path='/novovideo' element={<NovoVideo />} />

          </Routes>
        
        <Footer />
      
      </Container>
    </BrowserRouter>
    </VideoProvider>
  )
}

export default App
