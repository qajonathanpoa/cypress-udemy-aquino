/// <reference types="cypress" />

describe('Cypress basic', () => {
    it('Should and visit the title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        // cy.pause()
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo de Treinamento')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')
        cy.title().should(title => {

        })
    })
    it('Deve encontrar e interagir com um elemento', () => {

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')

    })
    it.only('Deve pegar o titulo da tela e escrever em outro campo', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title().then(title => {
            cy.get('#formNome').type(title)

            //Mais uma vez utilizando o wrap para receber e acessar os valores do elemento que estao chegando
            //pelo .then e digitando no campo encontrado
            cy.get('#elementosForm\\:sugestoes').then($element => {
                cy.wrap($element).type(title)
            })
        })

    })
})

