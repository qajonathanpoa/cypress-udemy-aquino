/// <reference types="cypress" />

describe('Trabalhando com elementos básicos de locators', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    it('Encontrando elementos por classe e id', () => {
        //Encontrando elemento por classe
        cy.get('.facilAchar')

        //Encontrando elemento por id
        cy.get('#formNome')
    })
    it('Encontrando elementos por atributos', () => {
        
        cy.get('[data-cy=dataSobrenome]')
        
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        
        cy.get("table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input")

        cy.get("[onclick*='Francisco']")

    })

    it('Encontrando elemento doutorado e escrevendo no inputs', () => {
        cy.get('#tabelaUsuarios tbody tr input:eq(3)').type('Goianinho')
        cy.get('#tabelaUsuarios tbody tr:eq(2) :button').click()
      
    })
})