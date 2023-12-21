/// <reference types="cypress" />

describe('Etendendo as esperas no Cypress', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')


    })
    it('Clicando no botao RESPOSTA demorada escrevendo e aguardando elemento estar disponível', () => {
        //O básico das esperas no cypress utilizando o should
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').type('Funciona...')
        cy.get('#novoCampo').should('exist')

    })
    it('Deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        //No encadeamento abaixo o cypress retorna que aguarda o null exisir pois 
        //o should na maioria das vezes retorna o mesmo objeto
        //Ou seja não faz sentido esperar que um campo não exista e em seguida exista
        //E devemos fazer as asserçoes separadas a fim de não gerar falhas! Exemplo abaixo
        //Chamando duas chamadas para elementos com objetos distintos
        cy.get('#novoCampo')
        .should('not.exist')
        .should('exist')
        .type('Agora sim o elemento existe e retornou o mesmo valor de objeto')

    })

    it("Validar o uso do timeout", function (){
        cy.get('#buttonListDOM').click()
        //É sempre uma melhor prática utilizar o timeout ao invés do wait, tendo em vista que o 
        //timeout caso o sistema responda antes do timeout definido ele irá processar, já no wait
        //mesmo que a resposta seja menor ele ficará aguardanro o tempo do timeout
        cy.get('#lista li', {timeout: 30000})
        .find('span')
        .should('contain', 'Item 1')

        cy.get('#lista li', {timeout: 30000})
        .find('span')
        .should('contain', 'Item 2')
       })
     
})