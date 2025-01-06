
import React,{ createContext, useState } from "react"
import videos from "../../Mocks/videos.json"
export const VideosContext = createContext() // aqui foi criado o contexto com o nome VideoContext
//VideosContext.displayName = "Videos" // aqui definimos que o contexto VideosContext vai ser chamado de "Videos"


export default function VideoProvider({children}){
    const [video, setVideo] = useState(videos)

    return(
        <VideosContext.Provider value={{video, setVideo}}>
            {children}
        </VideosContext.Provider>
    )
}
