/// <reference types="cypress" />

describe('Fixtures tests', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    it('Pegando dados de um arquivo fixture', () => {
        //Encontrando elemento por classe
        cy.get('#buttonSimple')

        
    })
})