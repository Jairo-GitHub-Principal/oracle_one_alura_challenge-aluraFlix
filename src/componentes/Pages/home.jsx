import React from "react"
import { HomeMainStyled,HomeStyled, } from "./styledHome.js"
import Header from "../Header/header.jsx"
import Banner from "../Banner/banner.jsx"
import bannerImagem from "../Banner/imgbaner/bannerAlura.png"
import Footer from "../Footer/footer.jsx"
import Categoria from "../ReusableComponent/CategoriaMovie/categoriaMovie.jsx"

const Home = () => {
    return (
        <HomeStyled >

            <Header />
            <Banner height="832px" backgroundImage={bannerImagem} />
            <HomeMainStyled>
               <Categoria />
            </HomeMainStyled>
            <Footer />

        </HomeStyled>
    )
}

export default Home