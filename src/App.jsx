
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './componentes/Pages/home.jsx'




function App() {

  return (
    <BrowserRouter >
     <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
     
    </BrowserRouter>
  )
}

export default App
