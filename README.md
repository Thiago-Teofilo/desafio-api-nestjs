# Documentação

Este é um projeto desenvolvido em NestJS e TypeScript com o uso do TypeORM, que permite a criação de um CRUD de usuários e sua integração com um banco de dados MySQL.

## Configuração do Ambiente

Para utilizar este projeto, siga os passos abaixo:

1. Crie um arquivo `.env` na raiz do projeto e utilize o arquivo `.env.example` como referência para definir as variáveis de ambiente necessárias. Este arquivo `.env.example` já contém as variáveis de ambiente recomendadas que podem ser utilizadas no `.env`.

2. Para iniciar o banco de dados MySQL, execute o comando `docker-compose up -d` com o Docker aberto em segundo plano. Isso irá gerar o container do banco de dados com a URL já configurada no arquivo `.env`.

3. Alternativamente, você pode especificar diretamente as credenciais de um banco de dados fora do Docker no arquivo `.env`, se preferir. Após configurar o arquivo `.env`, você pode iniciar a API no servidor local executando o comando `npm run start:dev`.

## Integração com Interface Vue.js

Este projeto de API deve ser integrado a uma interface Vue.js, que está armazenada em outro repositório. Você pode encontrar o repositório da interface Vue.js [desafio-web-vue](https://github.com/Thiago-Teofilo/desafio-web-vue).

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
    "cpf": "123.456.789-09",
    "genre": "Feminino",
    "email": "exemplo@email.com"
  }
  ```
- **Resposta:**
  ```json
  {
    "id": 1,
    "fullname": "Exemplo Nome",
    "dateOfBirth": "1990-01-01",
    "cpf": "123.456.789-09",
    "genre": "Feminino",
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
    "cpf": "123.456.789-09",
    "genre": "Feminino",
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
      "cpf": "123.456.789-09",
      "genre": "Feminino",
      "email": "exemplo@email.com"
    },
    {
      "id": 2,
      "fullname": "Segundo exemplo Nome",
      "dateOfBirth": "1990-02-01",
      "cpf": "987.654.321-00",
      "genre": "Masculino",
      "email": "exemplo2@email.com"    
    }
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
  }
  ```
- **Resposta:**
  ```json
  {
    "id": 2,
    "fullname": "Exemplo novo nome",
    "email": "exemplonovo@email.com",
    "dateOfBirth": "1990-02-01",
    "cpf": "987.654.321-00",
    "genre": "Masculino"
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
      "cpf": "123.456.789-09",
      "genre": "Feminino",
      "email": "exemplo@email.com"  
  }
  ```
Este é um guia básico para utilizar o projeto.

## Como funciona a validação de CPF

A validação do CPF segue algumas regras específicas:

1. O CPF deve conter 11 dígitos numéricos.
2. Não pode ser uma sequência de dígitos repetidos, como "111.111.111-11" ou "22222222222".
3. Os dois dígitos verificadores devem ser calculados corretamente.
4. O primeiro dígito verificador é calculado a partir dos primeiros 9 dígitos do CPF.
5. O segundo dígito verificador é calculado a partir dos 10 primeiros dígitos do CPF, incluindo o primeiro dígito verificador.

Se ambos os dígitos verificadores calculados coincidirem com os dígitos verificadores fornecidos no CPF, então o CPF é considerado válido.

Essas são as regras básicas para validar um CPF. A função `isValidCPF` que forneci anteriormente implementa essas regras de forma mais simplificada e legível.

A função `isValidCPF` verifica se um CPF é válido ou não com base em determinados critérios. Aqui estão alguns exemplos de CPFs que dariam erro e CPFs que seriam válidos de acordo com essa função:

### CPFs que dariam erro:

   - 000.000.000-00
   - 111.111.111-11
   - 222.222.222-22
   - 333.333.333-33
   - 444.444.444-44
   - 555.555.555-55
   - 666.666.666-66
   - 777.777.777-77
   - 888.888.888-88
   - 999.999.999-99
   - 123
   - 123456789
   - ABCDEFGHIJK

### CPFs que seriam válidos:

   - 123.456.789-09
   - 987.654.321-00
   - 01234567890
   - 12345678909
   - 529.982.247-25
   - 333.444.555-66
   - 123.456.789-09
   - 87654321098

Esses são apenas exemplos para ilustrar os diferentes casos que podem ser verificados pela função `isValidCPF`. É importante testar com uma variedade de casos para garantir que a função esteja funcionando corretamente em todas as situações.