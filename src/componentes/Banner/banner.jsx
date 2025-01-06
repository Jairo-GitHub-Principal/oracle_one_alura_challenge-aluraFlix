import Text from "../ReusableComponent/TextComponent/text";
import { BannerStyled } from "./styleBanner";
import style from "./banner.module.css"
import Button from "../ReusableComponent/ButtonComponent/button";
import imgVideo from "./imgbaner/imgVideo.png"

const Banner = (props) => {
    return (
        <BannerStyled
            $width={props.width}
            $height={props.height}
            $backgroundImage={props.backgroundImage}>

            <article className={style.textBannerContainer}>
                <Button
                    border="none"
                    $width="296px"
                    $height="92px"
                    $size="3.2rem"
                    $weight="600"
                    $categoria="Front End"
                    
                    
                >
                    Frontend
                </Button>
                <Text size="46px"
                    weight="normal"
                    color="white"
                    width="100%"
                    margin="0"
                    >
                    SEO com React
                </Text>

                <Text size="18px"
                    weight="normal"
                    color="white"
                    width="100%"
                    maxWidth="662px"
                    lineHeight="25px"
                    textAline="left"
                    margin="0"

                    >
                    Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma ">
                    Aprenda a otimizar seus sites com React
                </Text>
            </article>
            <div className={style.videoContainer}>
               
                    <img className={style.video}   src={imgVideo} alt="Video" />
                
            </div>
        </BannerStyled >
    )
}


export default Banner