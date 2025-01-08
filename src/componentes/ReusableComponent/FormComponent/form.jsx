import { useEffect, useState } from "react";
import styles from "./form.module.css";
import Text from "../TextComponent/text";
import { FormContainerStyled, ContainerInput, ContainerInput2 } from "./formStyled"
import { v4 as uuidv4 } from 'uuid';

import { useApi } from "../../Hooks/fetchApi/useApi"; // Ajuste o caminho conforme necessário



const Form = (props,{onSubmit }) => {
  const id= uuidv4();
  const {saveVideo, updateVideo} = useApi(); // estraindo o saveVideo do da useApi, que prove nossos hooks personalizados
  const [formData, setFormData] = useState({ /** criamos uma estado para armazenar os dados do formulário, e 
  inicializamos com valores vazios */
    categoria: '',
    src: '',
    id: ''
  })

  useEffect(() => { /** aqui nos usamos o useEffect para atualizar o estado do formulário quando o props.video mudar */
    if (props.video) {
      setFormData({
        categoria: props.video.categoria,
        src: props.video.src,
        id: props.video.id
      })
    }
  }, [props.video])

  // Função para atualizar os valores dos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async() => {
    if(!formData.categoria || !formData.src)
      {alert("Preencha todos os campos obrigatorios");
      return;
      }
    const isUpdate = !!formData.id;

      try {
        let resultado;
        if(isUpdate){
          resultado = await updateVideo(formData);
          alert("Vídeo atualizado com sucesso!");
        }else{
           resultado = await saveVideo(formData);
          alert("Vídeo salvo com sucesso!");

        }
      //   console.log(
      //     isUpdate ? "Vídeo atualizado com sucesso:" : "Vídeo salvo com sucesso:",resultado
      // );
      setFormData({ categoria: '', src: '', id: '' }); // Limpa o formulário
      if (onSubmit) onSubmit(); // Callback opcional após salvar/atualizar

      } catch (error) {
        console.error("Erro ao salvar os dados:", error);
        alert("Ocorreu um erro ao salvar/atualizar o vídeo.");

      }
    console.log("Dados enviados:", formData);
    // Aqui você pode implementar a lógica para salvar os dados editados
  };



  return (
    <form className={styles.form}  >
          <h1 >
            {props.titulo}
          </h1>

          <div className={styles.inputContainer}>
            <label htmlFor="titulo">Titulo:</label>
            <input type="text" id="titulo" name="titulo" placeholder="Digite o titulo" onChange={handleChange} />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="categoria">Categoria:</label>
            <input type="text" id="categoria" name="categoria" placeholder="Digite a categoria"
              value={formData.categoria}
              onChange={handleChange}
            />
          </div>




          <div className={styles.inputContainer}>
            <label htmlFor="img">Imagem  </label>
            <input type="text" id="img" name="img" placeholder="Digite o link da imagem" onChange={handleChange} />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="src">Video  </label>
            <input
              type="text" id="src" name="src"
              value={formData.src}
              onChange={handleChange}
              placeholder="Digite o link do video"
            />
          </div>



          <div className={styles.inputContainer}>
            <label htmlFor="descricao">Descricao:</label>
            <input type="text-area" id="descricao" name="descricao" placeholder="Digite a descricao" onChange={handleChange} />
          </div>


          <div className={styles.buttonContainer}>
            <button className={styles.btn} type="button" onClick={handleSubmit}>
            {formData.id ? 'ATUALIZAR' : 'GUARDAR'} {/* Altera o texto do botão dependendo do estado */}
            </button>

            <button className={styles.btn} type="button" >LIMPAR</button>
          </div>


    </form>
  );
}


export default Form