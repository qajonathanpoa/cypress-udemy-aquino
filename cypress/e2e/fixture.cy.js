/// <reference types="cypress" />

describe('Fixtures tests', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Pegando dados de um arquivo fixture', function(){

        cy.fixture("userData").as('usuario').then(() => {
            cy.get('#formNome').type(this.usuario.nome)
            cy.get('#formSobrenome').type(this.usuario.sobrenome)
            cy.get(`#formSexo [for=${this.usuario.sexo}]`).click()
            cy.get(`#formComida${this.usuario.comida}`).click()
            cy.get(`#formEscolaridade${this.usuario.escolaridade}`).select()
            cy.get(`#formEsportes > option:eq(2)${this.usuario.esportes}`).select()

        })

    })
})
