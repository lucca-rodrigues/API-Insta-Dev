# API-Insta-Dev

## API Insta Dev
- É uma API que simula o comportamento do instagram.
- Inclui algumas funcionalidades semelhantes a aplicação real, como cadastro de Usuários/Posts/Likes/Comentários.

## Instalação
- Para instalar e bem simples, basta rodar um dos comandos abaixo
``` yarn ``` ou ``` npm i  ```

## Executar o pojeto:
- Para rodar o projeto sem precisar configurar o banco externo, é necessário ter o docker instalado na máquina e sem seguida rodar o seguinte comando:
```sh
docker-compose up
```
- Este comando será responsável por criar a imagem docker, criar um banco de dados.
- Em seguida rodar o comando para executar o servidor node
``` yarn  start ``` ou ``` npm start ``` 

## Migrations
- Com api rodando e o banco de dados criado, agora execute a migration das tabelas para o banco
```yarn migrate``` ou ```npm run migrate```

## Documentação
- Esta API possui uma collection do insomnia para testes, e algumas das rotas também estão implementadas no swagger
- Para acessar o swagger utilizar a rota ```http://localhost:3333/api-docs/``` ou se preferir importar no insomnia a collection ```collection-insomnia.json``` localizada na raíz do projeto .

## Tecnologias
- Para este projeto forma utilizados os seguintes pacotes
 - Express
 - Sequelize
 - Postgres
 - Swagger
 - Multer
 - Bcrypt
 - JWT