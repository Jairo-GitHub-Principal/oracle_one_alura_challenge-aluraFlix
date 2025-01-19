
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home.jsx"
import Videos from './Pages/Videos.jsx';
import Header from "./componentes/Header/header.jsx";
import Footer from './componentes/Footer/footer.jsx';
import Container from './componentes/Container/container.jsx';
import ModalEdit from './componentes/ModalEdit/edit.jsx';
import NovoVideo from './componentes/NovoVideo/novoVideo.jsx';
import ModalVideo from './componentes/ModalVideo/modalVideo.jsx';
import Modal from './componentes/Modal/modal.jsx';
import {useContext } from 'react';
import { VideosContext } from './Context/videoContext.jsx';

function App() {

  const { isModaEditVideo,isModalOpenNovoVideo,isModalVideoOpen,
          setIsModalVideo,
          idPlay, setIdPlay,
          urlPlay, setUrlPlay,
          isModalTest
  } = useContext(VideosContext);

  
  const playVideo = (id) => {
    /** abaixo temos uma  expressão regular de uma  url, que sera usada */
    const isUrl = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?(#.*)?$/;

    setIsModalVideo(true);

    if (isUrl.test(id)) { /**se for uma url chama o setUrlPlay, se não chama o setIdPlay  */
      setUrlPlay(id);

    } else {
      setIdPlay(id);
    }



  };

  return (
    <BrowserRouter className="app" >
      {isModaEditVideo === true && ( // edit video
        <ModalEdit />
      )}

      {isModalOpenNovoVideo && ( // Novo video
        <NovoVideo />
      )}

      {isModalVideoOpen && (// Card video, Banner video
        <ModalVideo idPlay={idPlay} urlPlay={urlPlay} />
      )}

      {isModalTest && (
        <Modal />
      )}
      <Container>

        <Header />

        <Routes>
          <Route path="/" element={
            <Home
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
  )
}

export default App
