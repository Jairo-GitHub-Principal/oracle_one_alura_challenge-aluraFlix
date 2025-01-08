import { useEffect, useState } from "react";
import styles from "./form.module.css";
import Text from "../TextComponent/text";
import {FormContainerStyled,ContainerInput,ContainerInput2} from "./formStyled"

const Form = (props) => {
    const [formData, setFormData] = useState({
       
        categoria: '',
        src: '',
       id:''
    })

    useEffect(() => {
        if(props.video){
        setFormData({
            categoria: props.video.categoria,
            src: props.video.src,
            id: props.video.id
        })
    }
    },[props.video])

    // Função para atualizar os valores dos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = ( e ) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // Aqui você pode implementar a lógica para salvar os dados editados
  };


  
    return (
        <FormContainerStyled
         
        >
         
          <h1>
            <Text
          width="100%"
          size="44px" 
          weight="700" 
          color="#FFFFFF" 
          margin="0px" 
          padding="0px">{props.titulo}</Text></h1>
         
           
           

           <ContainerInput 
           
           $display={props.display} $flexDirection={props.flexDirection}
           $alignItems={props.alignItems} $justifyContent={props.justifyContent}
           $margin={props.margin} $padding={props.padding} $paddingBottom={props.paddingBottom}>
           
            <div className={styles.inputContainer}>
            <label htmlFor="titulo">Titulo:</label>
            <input type="text" id="titulo" name="titulo"  onChange={handleChange}/>
            </div>
           
           <div className={styles.inputContainer}>
           <label htmlFor="categoria">Categoria:</label>
           <input type="text" id="categoria" name="categoria" 
           value={formData.categoria} 
           onChange={handleChange}
           />
            </div> 

            </ContainerInput>
            
           <ContainerInput2 
           $display={props.display} $flexDirection={props.flexDirection}
           $alignItems={props.alignItems} $justifyContent={props.justifyContent}
           $margin={props.margin} $padding={props.padding} $paddingBottom={props.paddingBottom} > 
           <div className={styles.inputContainer}>
           <label htmlFor="src">Imagem  </label>
           <input type="text" id="src" name="src"  onChange={handleChange} />
           </div>

           <div className={styles.inputContainer}>
           <label htmlFor="src">Video  </label>
           <input 
           type="text" id="src" name="src" 
           value={formData.src} 
           onChange={handleChange}
           />
           </div>

           </ContainerInput2>

            
            <div className={styles.inputContainer}>
            <label htmlFor="descricao">Descricao:</label>
            <input type="text-area" id="descricao" name="descricao"  onChange={handleChange}/>
            </div>
           
            
            <div className={styles.buttonContainer}>
            <button className={styles.btn} type="submit">GUARDAR</button>
            <button className={styles.btn} type="submit">LIMPAR</button>
            </div>

        
        </FormContainerStyled>
    );
}


export default Form