/// <reference types="cypress"/>

describe('Criando cenário de teste para o site globalsqa', ()=> {

  it('Caso de teste: Registrando um usuário no site com sucesso', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('inatel')
    cy.get('#Text1').type('inatel')
    cy.get('#username').type('inatel')
    cy.get('#password').type('inatel')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')

  })

  it('Caso de teste: Registrando um usuário com falha (faltando senha)', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('inatel')
    cy.get('#Text1').type('inatel')
    cy.get('#username').type('inatel')
    cy.get('#password').type('inatel')
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text', 'Password is required')
    cy.get('.btn-primary').should('be.disabled')
    
  })


  it('Caso de teste: Realizando login com sucesso', () => {

   let info = criarUsuario()
   cy.get('#username').type(info[0])
   cy.get('#password').type(info[1])
   cy.get('.btn-primary').click()
   cy.get('h1.ng-binding').should('contain.text', info[0])

  })

  it('Caso de teste: Deletando um usuário com sucesso', () => {

    let info = criarUsuario()
    cy.login(info[0], info[1])
    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()
    cy.login(info[0], info[1])
    cy.get('.ng-binding').should('have.text', 'Username or password is incorrect')
   })



})

function criarUsuario(){

  let horas = new Date().getHours().toString();
  let minutos = new Date().getMinutes().toString();
  let seg = new Date().getSeconds().toString()
  let user = horas + minutos + seg + 'Id'
  let senha = horas + minutos +seg + 'senha'
  let userInfo = [user, senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)
  cy.get('#Text1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  return userInfo
}

/// <reference types="cypress"/>

describe('Criando cenário de teste para o site computer-database.gatling', ()=> {

  it('Caso de teste: Testando busca de computador Apple MacBook Pro', () => {

    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#searchbox').type('Apple MacBook Pro')
    cy.get('#searchsubmit').click()
    cy.get('.well').should('contain.text', 'Nothing to display')

  })

  it('Caso de teste: Testando busca de computador ASCI Blue Pacific e seus requisitos', () => {

    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#searchbox').type('ASCI Blue Pacific')
    cy.get('#searchsubmit').click()
    cy.get('tbody > tr > :nth-child(2)').should('contain.text', '01 Jan 1998')
    cy.get('tbody > tr > :nth-child(3)').should('contain.text', '-')
    cy.get('tbody > tr > :nth-child(4)').should('contain.text', 'IBM')
  })

  it('Caso de teste: Adicionando o Apple MacBook Pro 10', () => {

    let computerInfo = adicionarComputador()
    cy.get('.alert-message').should('contain.text', computerInfo[0])

  })

  it('Caso de teste(FALHA): Adicionando um computador com a data de introdução errada', () => {

    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#add').click()
    cy.get('#name').type("name")
    cy.get('#introduced').type("10-01-2009")
    cy.get('#discontinued').type("2010-01-10")
    cy.get('#company').select("Apple Inc.")
    cy.get('.primary').click() 
    cy.get('.error > .input > .help-inline').should('contain.text', 'Failed')
  })

  it('Caso de teste(FALHA): Adicionando um computador sem informações', () => {

    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#add').click()
    cy.get('.primary').click()
    cy.get('.error > .input > .help-inline').should('contain.text', 'Failed')
  })

})

function AdicionarComputador(){

  let name = "Apple MacBook Pro 11"
  let introduced = "2009-01-10"
  let discontinued = "2010-01-10"
  let company = "Apple Inc."
  let computerInfo = [name, introduced, discontinued, company]

  cy.visit('https://computer-database.gatling.io/computers')
  cy.get('#add').click()
  cy.get('#name').type(name)
  cy.get('#introduced').type(introduced)
  cy.get('#discontinued').type(discontinued)
  cy.get('#company').select(company)
  cy.get('.primary').click()

  return computerInfo
}