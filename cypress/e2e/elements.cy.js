/// <reference types="cypress" />

describe('Work with basic elements',()=>{
    it('Textos', ()=>{

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //Aumentando o escopo da pesquisa utilizando o body e o contain para fazer a assertiva
        //Pode ajustar um erro quando elementos não possuem id ou class
        cy.get('body').should('contain','Cuidado')

        //E com a localização da clase .facilAchar não há necessidade de utilizar o contain e sim
        //o próprio have.text. A diferença é que o have.text espera o escopo inteiro que no caso é:
        //Cuidado onde clica, muitas armadilhas...
        cy.get('.facilAchar')
        .should('have.text','Cuidado onde clica, muitas armadilhas...')
    })
    

    it.only('Links', ()=>{

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('[href="#"]').click()
        cy.get('#resultado') .should('have.text','Voltou!')
        cy.reload()
        cy.get('#resultado') .should('have.not.text','Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado') .should('have.text','Voltou!')
        
   
            })
})