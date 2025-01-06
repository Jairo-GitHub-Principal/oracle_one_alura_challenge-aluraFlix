import { useEffect, useState } from "react";
import styles from "./form.module.css";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // Aqui você pode implementar a lógica para salvar os dados editados
  };


  
    return (
        <form className={styles.formContainer}>
            <h1>EDITAR CARD:</h1>
           
           
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

            <div className={styles.inputContainer}>
            <label htmlFor="descricao">Descricao:</label>
            <input type="text-area" id="descricao" name="descricao"  onChange={handleChange}/>
            </div>
           
            
            <div className={styles.buttonContainer}>
            <button className={styles.btn} type="submit">GUARDAR</button>
            <button className={styles.btn} type="submit">LIMPAR</button>
            </div>

        
        </form>
    );
}


export default Form