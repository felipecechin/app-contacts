## Aplicação Front-end - CRUD de contatos
Para a construção da aplicação, foram utilizadas as seguintes tecnologias:
- Vite;
- React;
- Typescript.

Para estilização, foram utilizadas as bibliotecas:
- Styled Components;
- Tailwind CSS.

Outras bibliotecas utilizadas:
- React-hook-form: para gerenciar formulário;
- Yup: para validação de formulário.

Para simulação de API, foi utilizado `json-server`. A simulação é feita através do comando `yarn server` descrito no arquivo `package.json`.

**É preciso ter o pacote `json-server` instalado de forma global** para que o comando funcione corretamente.

Foi utilizada Context API para gerenciamento de estado.

### Para rodar a aplicação:

Depois de clonar o repositório e com o Node v16+, NPM e Yarn corretamente instalados, faça os seguintes passos:

1. Criar `.env` de acordo com o arquivo `.env.example` e definir a URL da API;
    - No meu caso, foi utilizada a URL http://localhost:3000.
2. Executar comando `yarn` para instalar dependências;
3. Executar comando `yarn dev` para executar aplicação.