import { CategoriaContainerStyled, CategoriaMovieContainerStyled } from "./categoriaMovieStyled.js";
import { ButtonStyled } from "../ButtonComponent/styledButton.js";
import Card from "../Card/card.jsx";


const Categoria = () => {
    const categoria = ["Front End", "Back End", "Mobile"]; // usaremos context api
    console.log(categoria);
    return (
        <>
            {categoria.map((categoria, indice) => (
                <CategoriaContainerStyled key={indice} >
                    <ButtonStyled
                        $width="432px"
                        $height="70px"
                        $categoria={categoria}
                    >
                        {categoria}
                    </ButtonStyled>
                    <CategoriaMovieContainerStyled>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        
                    </CategoriaMovieContainerStyled>
                </CategoriaContainerStyled>
            ))}
        </>
    );
};

export default Categoria;