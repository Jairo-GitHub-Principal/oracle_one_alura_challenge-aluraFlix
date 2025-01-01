
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from './componentes/InitialPage'




function App() {

  return (
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<InitialPage />} />
         
        </Routes>
     
    </BrowserRouter>
  )
}

export default App
