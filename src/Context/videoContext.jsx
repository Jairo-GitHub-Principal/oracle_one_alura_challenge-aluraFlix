
import React,{ createContext, useEffect, useState } from "react"
import categoriasDB from "../Mocks/categoria.json"
import {useApi} from "../Hooks/fetchApi/useApi.js"




export const VideosContext = createContext() // aqui foi criado o contexto com o nome VideoContext
//VideosContext.displayName = "Videos" // aqui definimos que o contexto VideosContext vai ser chamado de "Videos"


export default function VideoProvider({children}){

    const {getVideos} = useApi()
    const [video, setVideo] = useState([])
    const [categorias, setCategorias] = useState(categoriasDB);

     
    useEffect(()=>{ /**  função getVideos que faz a requisicao get, carrega os videos no estado no context video */
        getVideos(video, setVideo)
     },[]) 

    

    return(
        <VideosContext.Provider 
        value={{
            video, 
            setVideo, 
            categorias, 
            setCategorias
            }}>
            {children}
        </VideosContext.Provider>
    )
}
