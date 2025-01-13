import { useParams } from "react-router-dom";
import style from "./player.module.css"
import { VideosContext } from "../Context/videoContext";
import { useContext } from "react";

const Player = ({idPlay}) => {
    
    
   

    const { video } = useContext(VideosContext);

    const videoFilter = video.find((video) => { return video.id === idPlay })
   

    return (
        <div className={style.player} >
           

            <div className={style.iframeContainer}>
                <iframe
                    width="100%"
                    height="100%"
                    src={videoFilter.src}
                    allowFullScreen
                ></iframe>
            </div>
        </div>

    )
}

export default Player