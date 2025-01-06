
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

function App() {


  


  
 
  return (
    <BrowserRouter >
      <Container>
        <Header />
        <VideoProvider>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/:id" element={<Player />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
          <Route path='/edit/:id' element={<ModalEdit />} />

        </Routes>
        </VideoProvider>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
