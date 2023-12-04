# Integrantes:

- Nathan Santos Ataliba
- Gabriel Henrique Guerzony
- Joao Ryan Santos

 # Testes:

 Foi utilizado a API : https://computer-database.gatling.io/computers

 Foram feitos os seguintes testes:

 1 - Testando busca de computador Apple MacBook Pro

 2 -  Testando busca de computador ACER

 3 - Testando busca de computador ASCI Blue Pacific e seus requisitos

 4 - Adicionando o Apple MacBook Pro 10

 5 - Adicionando um computador com a data de introdução errada (falha)

 6 - Adicionando um computador sem informações (falha)

# Testes:
Instale as dependencias : ```npm install cypress --save-dev```

Para rodar os testes utilize: ```./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'```