import { ButtonStyled } from "./styledButton";
import PropTypes from 'prop-types'; // fazer validação de props


// eslint-disable-next-line react/prop-types
const Button = ({ children, $size, $border, $width, $height, $weight,$categoria,click  }) => {
    // console.log("Button",$categoria);

    const handleClick = (event) => {
        console.log("Evento",event)

        event.preventDefault(); // impede o carregamento da pagina
            click(event);  // Chama a função passada como prop
        
    };
    return (
        <ButtonStyled
            $size={$size}
            $width={$width}
            $height={$height} 
            $weight = {$weight} 
            $border = {$border}
            $categoria = {$categoria}
            onClick={(event)=>handleClick(event)} // Função vazia como fallback

            >
            {children}
        </ButtonStyled>
    );
};

/**  validar as props */

Button.propTypes = {
    children: PropTypes.node.isRequired, // Valida que `children` é renderizável e obrigatório
    size: PropTypes.string, // Valida como string
    border: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    weight: PropTypes.string,
    categoria: PropTypes.string,
};



export default Button;