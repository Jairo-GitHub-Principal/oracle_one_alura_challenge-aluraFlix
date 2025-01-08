import { TextStyled, TextContainerStyled } from "./styled";

const Text = ({children,size,weight,color,margin,padding,lineHeight,width,maxWidth,height,textAline,family}) => {
  return (
    <>
    <TextContainerStyled $width={width} $maxWidth= {maxWidth} $height={height}  >
      <TextStyled
       $size={size} 
       $weight={weight} 
       $color={color} 
       $margin={margin} 
       $padding={padding}
       $lineHeight={lineHeight}
       $textAline={textAline}
       $width={width}
       $maxWidth= {maxWidth}
       $family={family}
       
       
       >
        {children}
      </TextStyled>
      </TextContainerStyled>
    </>
  );
};

export default Text;