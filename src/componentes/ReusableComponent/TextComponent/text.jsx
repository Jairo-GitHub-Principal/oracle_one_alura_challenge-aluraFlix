import { TextStyled, TextContainerStyled } from "./styled";

const Text = (props) => {
  return (
    <>
    <TextContainerStyled $maxWidth="168px" $height="40px"  >
      <TextStyled
       $size={props.size} 
       $weight={props.weight} 
       $color={props.color} 
       $margin={props.margin} 
       $lineHeight={props.lineHeight}
       
       >
        {props.text}
      </TextStyled>
      </TextContainerStyled>
    </>
  );
};

export default Text;