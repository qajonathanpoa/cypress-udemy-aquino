/// <reference types="cypress" />

//Testes implementando o uso dos métodos clock e tick, que são usados para retroceder uma data ou
//avançar no tempo

describe('Time tests', function () {
    beforeEach(function () {
        cy.visit('https://wcaquino.me/cypress/componentes.html')



    })

    it('Validando ao passado com o clock', ()=>{

        //com o clock nós conseguimos definir uma data passada, enganando assim a data do sistema!
        //A data padrão que ele define é 31/12/1969
        cy.get('#buttonNow').click()
        cy.get('#resultado > span')
        .should('contain','14/03/2024')

        // cy.clock()
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span')
        // .should('contain','31/12/1969')
        //Abaixo estou definindo uma data com o auxílio do método Date para manipular uma data personalizada
        //para o clock
        //ano,mes com index 0,dia, hora,minutos, segundos
        const data = new Date(2012,0,10,15,23,50)
        cy.clock(data.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span')
        .should('contain','14/03/2024')

    
    })

    
    it.only('Validando ida para o futuro o tick', ()=>{

        
    cy.get('#buttonTimePassed').click()
    cy.get('#resultado span').should('contain','1710')
    
    cy.clock()

    cy.get('#buttonTimePassed').click()
    cy.get('#resultado span').invoke('text').should('contain',0)
   
    cy.tick(1000)
    cy.get('#buttonTimePassed').click()
    cy.get('#resultado span').invoke('text').should('contain',1000)


})
})