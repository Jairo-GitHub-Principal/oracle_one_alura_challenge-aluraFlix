import { ButtonStyled } from "./styledButton";
import PropTypes from 'prop-types'; // fazer validação de props


// eslint-disable-next-line react/prop-types
const Button = ({ children, $size, $border, $width, $height, $weight,$categoria,click  }) => {
    // console.log("Button",$categoria);

    const handleClick = (event) => {
        console.log("Evento", event);
    
        event.preventDefault(); // Impede o carregamento da página
    
        // Verifica se `click` é uma função antes de chamá-la
        if (typeof click === "function") {
            click(event); // Chama a função passada como prop
        } else {
            console.warn("A prop `click` não é uma função válida.");
        }
    };
    return (
        <ButtonStyled
            $size={$size}
            $width={$width}
            $height={$height} 
            $weight = {$weight} 
            $border = {$border}
            $categoria = {$categoria}
            onClick={handleClick} // Função vazia como fallback

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