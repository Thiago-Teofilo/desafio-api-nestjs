# Documentação

Este é um projeto desenvolvido em NestJS e TypeScript com o uso do TypeORM, que permite a criação de um CRUD de usuários e sua integração com um banco de dados MySQL.

## Configuração do Ambiente

Para utilizar este projeto, siga os passos abaixo:

1. Crie um arquivo `.env` na raiz do projeto e utilize o arquivo `.env.example` como referência para definir as variáveis de ambiente necessárias. Este arquivo `.env.example` já contém as variáveis de ambiente recomendadas que podem ser utilizadas no `.env`.

2. Para iniciar o banco de dados MySQL, execute o comando `docker-compose up -d` com o Docker aberto em segundo plano. Isso irá gerar o container do banco de dados com a URL já configurada no arquivo `.env`.

3. Alternativamente, você pode especificar diretamente as credenciais de um banco de dados fora do Docker no arquivo `.env`, se preferir. Após configurar o arquivo `.env`, você pode iniciar a API no servidor local executando o comando `npm run start:dev`.

## Integração com Interface Vue.js

Este projeto de API deve ser integrado a uma interface Vue.js, que está armazenada em outro repositório. Você pode encontrar o repositório da interface Vue.js [aqui](link_para_o_repositorio).

## Funcionalidades do CRUD de Usuários

O CRUD de usuários permite a manipulação dos seguintes dados:

- Nome completo
- CPF
- Data de Nascimento
- Gênero
- Email

A seguir, estão listadas as rotas disponíveis para o CRUD de usuários, juntamente com exemplos de uso:

### Criar Usuário
- **Método:** POST
- **Rota:** `/users`
- **Corpo da Requisição:**
  ```json
  {
    "fullname": "Exemplo Nome",
    "dateOfBirth": "1990-01-01",
    "cpf": "123.456.789-00",
    "genre": "Masculino",
    "email": "exemplo@email.com"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": 1,
    "fullname": "Exemplo Nome",
    "dateOfBirth": "1990-01-01",
    "cpf": "123.456.789-00",
    "genre": "Masculino",
    "email": "exemplo@email.com"
  }
  ```

### Obter Um Usuário
- **Método:** GET
- **Rota:** `/users/:id`
- **Parâmetro da Rota:** `id` do usuário
- **Resposta:**
  ```json
  {
    "id": 1,
    "fullname": "Exemplo Nome",
    "dateOfBirth": "1990-01-01",
    "cpf": "123.456.789-00",
    "genre": "Masculino",
    "email": "exemplo@email.com"
  }
  ```

### Obter Todos os Usuários
- **Método:** GET
- **Rota:** `/users`
- **Resposta:**
  ```json
  [
    {
      "id": 1,
      "fullname": "Exemplo Nome",
      "dateOfBirth": "1990-01-01",
      "cpf": "123.456.789-00",
      "genre": "Masculino",
      "email": "exemplo@email.com"
    },
    {
      "id": 2,
      "fullname": "Segundo exemplo Nome",
      "dateOfBirth": "1990-02-01",
      "cpf": "123.452.778-00",
      "genre": "Feminino",
      "email": "exemplo2@email.com"    
    }
    // Outros usuários
  ]
  ```

### Atualizar Usuário
- **Método:** PUT
- **Rota:** `/users/:id`
- **Parâmetro da Rota:** `id` do usuário
- **Corpo da Requisição:**
  ```json
  {
    "fullname": "Exemplo novo nome",
    "email": "exemplonovo@email.com"
    // Outros dados que deseja editar
  }
  ```
- **Resposta:**
  ```json
  {
    "id": 2,
    "fullname": "Exemplo novo nome",
    "email": "exemplonovo@email.com",
    "dateOfBirth": "1990-02-01",
    "cpf": "123.452.778-00",
    "genre": "Feminino"
  }
  ```

### Deletar Usuário
- **Método:** DELETE
- **Rota:** `/users/:id`
- **Parâmetro da Rota:** `id` do usuário
- **Resposta:**
  ```json
  {
      "id": 1,
      "fullname": "Exemplo Nome",
      "dateOfBirth": "1990-01-01",
      "cpf": "123.456.789-00",
      "genre": "Masculino",
      "email": "exemplo@email.com"  
  }
  ```

Este é um guia básico para utilizar o projeto.