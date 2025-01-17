import { CategoriaContainerStyled, CategoriaMovieContainerStyled } from "./categoriaMovieStyled.js";
// import { ButtonStyled } from "../ButtonComponent/styledButton.js";
import Button from "../ButtonComponent/button.jsx";
import Card from "../Card/card.jsx";
import { useContext,  useEffect,  useState } from "react";
import {VideosContext} from "../../Context/videoContext.jsx";
// import { v4 as uuidv4 } from 'uuid';




const Categoria = ({ edit, playVideo }) => {
    const { video, setVideo } = useContext(VideosContext);
    const [categoria, setCategoria] = useState(["Front End", "Back End", "Mobile"]); // Usaremos o context API

    const atualizarLista = (id) => {
        setVideo((prevSt) => prevSt.filter((video) => video.id !== id));
    };

    return (
        (video.length > 0 )?
        <>
            {categoria.map((categoria) => {
                // Filtra os vídeos pela categoria
                const videosNaCategoria = video.filter((videos) => videos.categoria === categoria);

                // Se não houver vídeos para a categoria, não renderiza o contêiner da categoria
                if (videosNaCategoria.length === 0) {
                    return null; // Retorna null para não renderizar o contêiner
                }

                return (
                    <CategoriaContainerStyled key={categoria}>
                        <Button
                            $width="432px"
                            $height="70px"
                            $size="2.2rem"
                            $categoria={categoria}
                            $buttonSamrtPhone="292px"
                        >
                            {categoria}
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
                                    edit={edit} // Função que pega os vídeos que serão editados
                                    playVideo={playVideo}
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