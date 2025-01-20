import { CategoriaContainerStyled, CategoriaMovieContainerStyled } from "./categoriaMovieStyled.js";
// import { ButtonStyled } from "../ButtonComponent/styledButton.js";
import Button from "../ButtonComponent/button.jsx";
import Card from "../Card/card.jsx";
import { useContext } from "react";
import {VideosContext} from "../../../Context/videoContext.jsx";
import {useApi} from "../../../Hooks/fetchApi/useApi.js";
// import { v4 as uuidv4 } from 'uuid';




const Categoria = () => {
    const { video, setVideo } = useContext(VideosContext);
    const {categorias} = useContext(VideosContext);

    const atualizarLista =  (id) => {
        setVideo((prevSt) => prevSt.filter((video) => video.id !== id));
    }; 

    
    

    return (
        (video.length > 0 )?
        <>
            {categorias.map((cat) => {
                // Filtra os vídeos pela categoria
                const videosNaCategoria = video.filter((videos) => videos.categoria === cat.categoria);

                // Se não houver vídeos para a categoria, não renderiza o contêiner da categoria
                if (videosNaCategoria.length === 0) {
                    return null; // Retorna null para não renderizar o contêiner
                }

                return (
                    <CategoriaContainerStyled key={cat.id}>
                        <Button
                            $width="432px"
                            $height="70px"
                            $size="2.2rem"
                            $categoria={cat.categoria}
                            $buttonSamrtPhone="292px"
                        >
                            {cat.categoria}
                        </Button>
                        <CategoriaMovieContainerStyled>
                            {videosNaCategoria.map((video) => (
                                <Card
                                    key={video.id}
                                    id={video.id}
                                    titulo={video.titulo}
                                    categoria={video.categoria}
                                    img={video.img}
                                    src={video.src}
                                    descricao={video.descricao}
                                    atualizarLista={atualizarLista}
                                />
                            ))}
                        </CategoriaMovieContainerStyled>
                    </CategoriaContainerStyled>
                );
            })}
        </>:<h1>Carregando...</h1>
    );
};



export default Categoria;