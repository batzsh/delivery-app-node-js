

<h1 align="center">
     🚚 Delivery App
</h1>

<h3 align="center">
    🙋‍♂️ Uma API para registrar clientes, entregadores e solicitações de delivery.
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/henbalmant/delivery-app-node-js?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/henbalmant/delivery-app-node-js">

  <a href="https://www.twitter.com/tgmarinho/">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Ftgmarinho%2FREADME-ecoleta">
  </a>
  
  <a href="https://github.com/henbalmant/delivery-app-node-js/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/henbalmant/delivery-app-node-js">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/henbalmant/delivery-app-node-js/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/henbalmant/delivery-app-node-js?style=social">
  </a>

  <a href="https://batcave.dev.br">
    <img alt="Feito por henbalmant" src="https://img.shields.io/badge/feito%20por-henbalmant-%237519C1">
  </a>
  
  <a href="https://batcave.dev.br/">
    <img alt="Stargazers" src="https://img.shields.io/badge/Batcave-Community-%237159c1?style=flat&logo=ghost">
    </a>
  
 
</p>

<h4 align="center">
	🚧   Concluído 🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)
   * [Tecnologias](#-tecnologias)
   * [Como contribuir no projeto](#-como-contribuir-no-projeto)
   * [Autor](#-autor)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

🚚 Delivery App - é uma aplicação backend que disponibiliza uma API para cadastro, autenticação e gerenciamento de pedidos.

Projeto desenvolvido dentro do **Ignite** oferecido pela [Rocketseat](https://rocketseat.com.br/).

---

## ⚙️ Funcionalidades

- [x] Clientes e entregadores podem se cadastrar informando:
  - [x] nome de usuário
  - [x] senha

- [x] Os clientes, após se autenticarem, podem:
  - [x] visualizar todas as entregas que solicitaram
  
- [x] Os entregadores, após se autenticarem, podem:
  - [x] visualizar todas as entregas disponíveis para realizar
  - [x] aceitar uma entrega disponível
  - [x] finalizar uma entrega
  - [x] visualizar todas as entregas que realizaram

---

## 🚀 Como executar o projeto

Este projeto possui apenas a aplicação backend.

💡 Todas as requisições precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/getting-started/install) & [docker-compose](https://docs.docker.com/compose/install/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:henbalmant/delivery-app-node-js.git

# Acesse a pasta do projeto no terminal/cmd
$ cd delivery-app-node-js

# Instale as dependências
$ yarn install

# Execute o script do docker-compose (em alguns casos, você precisará executar com sudo)
$ docker-compose up -d

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000 

```
<p align="center">
  <a href="https://github.com/henbalmant/delivery-app-node-js/blob/master/Insomnia_API_Delivery_App.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>


---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Backend**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Prisma.io](https://www.prisma.io/)**
-   **[Bcrypt](https://www.npmjs.com/package/bcrypt)**
-   **[Express](https://expressjs.com/)**
-   **[express-async-errors](https://www.npmjs.com/package/express-async-errors)**
-   **[json-web-token](https://www.npmjs.com/package/jsonwebtoken)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**

> Veja o arquivo  [package.json](https://github.com/henbalmant/delivery-app-node-js/blob/master/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Commit Conventional:  **[Commitlint](https://github.com/conventional-changelog/commitlint)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**

---

## 💪 Como contribuir no projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 🦸 Autor

<a href="https://batcave.dev.br/author/henbalmant/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/20211646?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Henrique Balmant</b></sub></a> <a href="https://batcave.dev.br/author/henbalmant/" title="Batcave">🚀</a>
 <br />

[![Gmail Badge](https://img.shields.io/badge/-henrique.balmant@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:henrique.balmant@gmail.com)](mailto:henrique.balmant@gmail.com)
[![Linkedin Badge](https://img.shields.io/badge/-Henrique%20Balmant-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henrique-balmant/)](https://www.linkedin.com/in/henrique-balmant/)

---

## 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).

Feito com ❤️ por Henrique Balmant 👋🏽 [Entre em contato!](https://www.linkedin.com/in/henrique-balmant/)
