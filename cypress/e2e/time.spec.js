/// <reference types="cypress" />

describe('Usando o clock nos testes', function () {
    beforeEach(function () {
        cy.visit('https://wcaquino.me/cypress/componentes.html')



    })

    it.only('Voltando ao passado', function () {

        cy.get('#buttonNow').click()
        cy.get('#resultado > span')

})

})