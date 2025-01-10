import { useContext, useEffect } from "react";
import {VideosContext} from "../../Context/videoContext.jsx"




export const atualizarLista =(video,setVideo)=> {
    setVideo((prevSt) => [...prevSt,video]);
   }

export const useApi= () => {
   

 
        function getVideos(video, setVideo) {
            fetch("http://localhost:3000/videos")
                 .then((resposta) => resposta.json())
                 .then((resposta) => setVideo(resposta))
       

       }



        

    
     

    //     const saveVideo = async (video,isUpdate = false) => {
    //         console.log("API",isUpdate)
    //     try {   
    //                 /** criar um id de video diferente e maior que  ultimo adicionado */
    //                 const videos = await fetch("http://localhost:3000/videos")
    //                 .then((response)=>response.json())
    //                 const lastVideo = videos[videos.length - 1];
    //                 const newId = lastVideo ? lastVideo.id + 1 : 1

    //                 video.id = newId;
    //             /**  se isUpdate for true, vai add  o id no fim  da url se não, seta a url sem id */
               
    //             const url = isUpdate ? `http://localhost:3000/videos/?id=${video.id}` : "http://localhost:3000/videos";
    //             const method = isUpdate ?  "PUT":"POST"; // setaa o  metodo de acordo com o estado de isUpdate
                
                
    //         const response = await fetch(url, {
    //             method, // metodo sera selecionado dinamicamentne
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(video), // Envia os dados no corpo da requisição
    //         });
    
    //         if (!response.ok) {
    //             throw new Error("Erro ao salvar o vídeo");
    //         }
    
    //         return await response.json(); // Retorna o objeto salvo
    //     } catch (error) {
    //         console.error("Erro:", error);
    //         throw error;
    //     }
    // };
    

    /** salvar video */

           // Atualizar listagem apos add video

         

    const saveVideo = async (video, setVideo) => {
        console.log("Salvando novo vídeo");
        try {
            // Buscar vídeos existentes para pegar o último  ID registrado que tambem deve ser o id de maior valor
            const videos = await fetch("http://localhost:3000/videos")
                .then((response) => response.json());
                /** com o cocdigo  da lina abixo pego o maior id registrado,  */
                const maiorId = Math.max(...videos.map((video) => video.id), 0);
                console.log("Maior ID",maiorId);
                console.log("Tipo de maiorId",typeof maiorId);
           

            const lastVideo = maiorId;
            console.log("ultimo id registrado", lastVideo);
            console.log("latestVideo tem o tipo", typeof lastVideo);
            const newId = lastVideo ? lastVideo + 1 : 1;// se lastVideo for true, incrementa o lastVideo + 1 para criar um id de maior valor que o maior id existente na tabela de registros de video
            console.log("Novo id", newId);
            video.id = String(newId); // Atribuindo novo ID ao vídeo
    
            const url = "http://localhost:3000/videos"; // URL para salvar um novo vídeo
            const method = "POST"; // Método POST para criar um novo vídeo
    
            // Enviar os dados para o servidor
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(video), // Envia os dados no corpo da requisição
                   
               

            }); 
            if(response.ok){
                console.log("Video salvo com sucesso");
                    getVideos(video, setVideo)

            }
    
            if (!response.ok) {
                throw new Error("Erro ao salvar o vídeo");
            }

            return await response.json(); // Retorna o vídeo salvo
        } catch (error) {
            console.error("Erro:", error);
            throw error;
        }

    };


    /**atualizar um video existente */

    const updateVideo = async (video,setVideo) => {
        console.log("Atualizando vídeo", video);
        console.log("Atualizando vídeo com ID:", video.id);
        const id = Number(video.id);
        try {
            const url = `http://localhost:3000/videos/${id}`; // URL para atualizar um vídeo específico
            const method = "PUT"; // Método PUT para atualizar o vídeo
    
            // Enviar os dados para o servidor
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(video), // Envia os dados no corpo da requisição
            });

      
                console.log("Video salvo com sucesso");
                    getVideos(video, setVideo)

            
    
            if (!response.ok) {
                throw new Error("Erro ao atualizar o vídeo");
            }
    
            return await response.json(); // Retorna o vídeo atualizado
            

        } catch (error) {
            console.error("Erro:", error);
            throw error;
        }
    };


    const deleteVideo = async (videoId) => {

        console.log("Deletando vídeo", videoId);
        if(typeof videoId === "string"){
            console.log(videoId," STRING");
        }else{
            console.log(videoId," NUMERO");
            console.log("o Tipo de videoId e:",typeof videoId);
        }
    
        const url = `http://localhost:3000/videos/${videoId}`; // URL para deletar um vídeo específico
    
        try {
            // Enviar a requisição DELETE para o servidor
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body:videoId,
                
            });
            
            if (!response.ok) {
                throw new Error("Erro ao deletar o vídeo");
            }
    
            console.log("Vídeo deletado com sucesso");
            return { success: true }; // Retorna sucesso se não houver erro
        } catch (error) {
            console.error("Erro:", error);
            throw error;
        }




    };
    
    
    
    



       return{
        getVideos,
        saveVideo,
        updateVideo,
        deleteVideo
    }

   

}