/// <reference types="cypress" />

describe('Work with basic Alerts no Cypress', () => {


    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')


    })
    it('Validando Cadastro com Alerts', () => {

        const stub = cy.stub().as('Alerts validações!')

        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio')
            cy.get('#formNome').type('Jonzinho')

            cy.get('#formCadastrar').click().then(() => {
                expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio')
                cy.get('#formSobrenome').type('Cavalcanti')

                cy.get('#formCadastrar').click().then(() => {
                    expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio')
                    cy.get('#formSexoMasc').click()
                    cy.get('#formCadastrar').click()
                    cy.get('#resultado')
                    .find('span')
                    .should('contain', 'Cadastrado!')
                
                })
            })
        })
    })

})