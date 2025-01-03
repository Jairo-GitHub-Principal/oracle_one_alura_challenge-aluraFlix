import { ButtonStyled } from "./styledButton";
import PropTypes from 'prop-types'; // fazer validação de props


// eslint-disable-next-line react/prop-types
const Button = ({ children, size, border, width, height, weight,categoria }) => {
    console.log(categoria);
    return (
        <ButtonStyled
            $size={size}
            $width={width}
            $height={height} 
            $weight = {weight} 
            $border = {border}
            $categoria = {categoria}

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