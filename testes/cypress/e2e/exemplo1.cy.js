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