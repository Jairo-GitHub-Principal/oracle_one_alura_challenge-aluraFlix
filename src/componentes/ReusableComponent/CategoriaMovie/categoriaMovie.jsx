import { CategoriaContainerStyled, CategoriaMovieContainerStyled } from "./categoriaMovieStyled.js";
// import { ButtonStyled } from "../ButtonComponent/styledButton.js";
import Button from "../ButtonComponent/button.jsx";
import Card from "../Card/card.jsx";
import { useContext,  useState } from "react";
import {VideosContext} from "../../Context/videoContext.jsx";
import { v4 as uuidv4 } from 'uuid';





const Categoria = ({edit}) => {
    const {video} = useContext(VideosContext);
    const [categoria, setCategoria] = useState(["Front End", "Back End", "Mobile"]); // usaremos context api
   
   
   
    return (
        <>
            {categoria.map((categoria, id) => (
                <CategoriaContainerStyled key={uuidv4()} >
                    <Button
                        $width="432px"
                        $height="70px"
                        $size="2.2rem"
                        $categoria={categoria}
                    >
                        {categoria}
                    </Button>
                    <CategoriaMovieContainerStyled>
                    {
                        video.filter((videos) => videos.categoria === categoria)// Filtra os cards pela categoria
                        .map((video) => (
                            <Card
                                key={video.id}
                                src={video.src}
                                categoria={video.categoria}
                                id={video.id}
                                edit={edit} // função que pega os video que sera editado
                            />
                        ))
                    }
                       
                       

                    </CategoriaMovieContainerStyled>
                </CategoriaContainerStyled>
            ))}
        </>
    );
};

export default Categoria;