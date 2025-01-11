# React + Vite
# AluraFlix

Uma plataforma inspirada na Netflix, projetada para apresentar vídeos dos cursos da Alura. Este projeto acadêmico oferece uma experiência dinâmica e responsiva, com funcionalidades para exibir, adicionar, editar e remover vídeos. 

## 🚀 Layout

### Página Inicial
- **Header**: Contém o logo do AluraFlix e dois botões:
  - **Home**: Redireciona para a página inicial.
  - **Novo Vídeo**: Leva o usuário ao formulário para adicionar um novo vídeo.
- **Responsividade**:
  - **Modo Desktop**: Logo alinhado à esquerda, botões alinhados à direita.
  - ![Texto Alternativo](https://github.com/Jairo-GitHub-Principal/oracle_one_alura_challenge-aluraFlix/blob/master/imgGithub/headerDesktop.jpg?raw=true)
  - **Modo tablet (abaixo de 820px)**: Logo centralizado no topo, botões exibidos abaixo do logo, alinhados à esquerda (**Home**) e à direita (**Novo Vídeo**).
  - ![](https://github.com/Jairo-GitHub-Principal/oracle_one_alura_challenge-aluraFlix/blob/master/imgGithub/headerTablet.jpg?raw=true)
   - **Modo smartphone (abaixo de 420px)**: Logo centralizado no topo, botões exibidos abaixo do logo, alinhados  um em baixo do outro (verticalmente) (**Home**) em cima (**Novo Vídeo**) em baixo.
   - ![](https://github.com/Jairo-GitHub-Principal/oracle_one_alura_challenge-aluraFlix/blob/master/imgGithub/headerSmartphone.jpg?raw=true)

### Banner
- Imagem de fundo com dois containers:
  - Texto breve apresentando um curso.
  - Imagem relacionada ao tutor do curso.
- **Responsividade**:
  - **Modo Desktop**: Texto e imagem alinhados horizontalmente.
  - ![](https://github.com/Jairo-GitHub-Principal/oracle_one_alura_challenge-aluraFlix/blob/master/imgGithub/bannerDesktop.jpg?raw=true)
  - **Modo Tablete (abaixo de 820px)**: Elementos texto e imagem alinhados verticalmente.
  - ![](https://github.com/Jairo-GitHub-Principal/oracle_one_alura_challenge-aluraFlix/blob/master/imgGithub/bannerTablet.jpg?raw=true)
  - **Modo smartphone (abaixo de 420px)**: Elementos removidos para otimizar o layout.

### Categorias de Cursos
- Exibição de cards organizados em três categorias:
  - **Frontend**
  - **Backend**
  - **Mobile**
- Cada card contém:
  - Imagem ou vídeo de capa.
  - Botões de:
    - **Excluir**: Remove o card.
    - **Play**: Abre o vídeo em uma tela de visualização.
    - **Editar**: Leva ao formulário para editar o vídeo.
- **Responsividade**:
  - **Modo Desktop**: Exibe até 3 cards alinhados  horizontal com scroll  para navegar pelos demais cards da lista horizontal.
  - ![](https://github.com/Jairo-GitHub-Principal/oracle_one_alura_challenge-aluraFlix/blob/master/imgGithub/cardsDesktop.jpg?raw=true)
  - **Modo Tablet (abaixo de 820px)**: Exibe até 2 cards com scroll  para navegar pelos demais cards da lista horizontal.
  - ![](https://github.com/Jairo-GitHub-Principal/oracle_one_alura_challenge-aluraFlix/blob/master/imgGithub/cardsTablet.jpg?raw=true)
  - **Modo Mobile (abaixo de 420px)**: Exibe 1 card por vez com scroll horizontal Exibe até 2 cards com scroll  para navegar pelos demais cards da lista horizontal.
  - ![](https://github.com/Jairo-GitHub-Principal/oracle_one_alura_challenge-aluraFlix/blob/master/imgGithub/cardsSmartphone.jpg?raw=true)

    -**Formularios para add e editar video.
    - ![](https://github.com/Jairo-GitHub-Principal/oracle_one_alura_challenge-aluraFlix/blob/master/imgGithub/addvideo.jpg?raw=true)

### Rodapé
- Apenas o logo do AluraFlix.

### Navegação
- O botão **Home** e o logo no topo sempre levam de volta à página inicial.

---

## 🛠️ Especificações Técnicas

- **Tecnologias utilizadas**:
  - **Frontend**: React.js, CSS, HTML.
  - **Backend**: JSON-Server (para simulação de armazenamento de dados).
  - **Requisições**: Fetch API com hooks personalizados.
  - **Gerenciamento de Estado**: Context API.
  
- **Fluxo de dados**:
  - Os dados são armazenados em um arquivo `db.json` e disponibilizados via JSON-Server.
  - **Requisições GET**:
    - Carregam os dados do `db.json` para o estado inicial da aplicação.
    - Os dados são gerenciados pelo Context API e exibidos na interface.
  - **Requisições POST, PUT e DELETE**:
    - Gravam, atualizam ou removem dados no `db.json`.

---

## 🌐 Link para o projeto
Acesse a versão hospedada do projeto no Vercel:
[AluraFlix](#)  
### https://oracle-one-alura-challenge-alura-flix.vercel.app/

---

## 📱 Layout Responsivo

O AluraFlix foi projetado para ser totalmente responsivo, garantindo uma ótima experiência em dispositivos de diferentes tamanhos, desde desktops até smartphones.

---

## 📂 Estrutura de Arquivos

- `/src`: Contém os arquivos principais do projeto.
  - `/components`: Componentes reutilizáveis como `Header`, `Banner` e `Card`.
  - `/contexts`: Configuração do Context API.
  - `/hooks`: Hooks personalizados para requisições ao backend.
  - `/pages`: Páginas principal Home.
  - 

---

## 🖥️ Como rodar o projeto localmente

1. Clone este repositório:
   ```bash
 ###  https://github.com/Jairo-GitHub-Principal/oracle_one_alura_challenge-aluraFlix.git
   
   Navegue até o diretório do projeto:
* cd aluraflix

#### Instale as dependências:

#### npm install

#### Inicie o JSON-Server:

#### npx json-server --watch db.json --port 3000
#### Inicie o aplicativo React:

#### npm start  caso esteja usando CRA creat-reac-app ou npm run dev, se estiver usando vite


#### http://localhost:3000

```bash

