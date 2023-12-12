/// <reference types="cypress" />

describe('Cypress basic',()=>{
    it('Should and visit the title',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        // cy.pause()
        cy.title()
              .should('be.equal', 'Campo de Treinamento')
              .should('contain', 'Campo de Treinamento')

              cy.title()
              .should('be.equal', 'Campo de Treinamento')
              .and('contain', 'Campo').debug()
    })
    it('Deve encontrar e interagir com um elemento', ()=>{

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!')

    })
})

