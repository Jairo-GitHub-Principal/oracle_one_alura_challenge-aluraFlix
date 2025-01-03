import {BannerStyled} from "./styleBanner";

const Banner = (props) => {
    return (
        <BannerStyled
            $width={props.width}
            $height={props.height}
            $backgroundImage={props.backgroundImage}>
        </BannerStyled >
    )
}


export default Banner