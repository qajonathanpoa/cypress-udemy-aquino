/// <reference types="cypress" />

describe('Work with select elements',()=>{

    beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
     

    })

it("validar select combo produto por text value 1grauincomp", function (){
    cy.get('#formEscolaridade')
      .select('1o grau incompleto')
      .should('have.length', 1)
    
})
   
    it.only("validar select combo pelos seus indices Cursos e Mentoria", function (){
//    cy.get('#formEsportes')
//   .select([1,2])
//   .invoke('val')
//   .should('deep.equal', ['futebol', 'Corrida'])
    cy.get('#formEsportes')
    .select([1,2])
       cy.get('#formEsportes').then($el =>{
            cy.wrap($el).should('contain.text', 'Futebol')
            .should('contain.text','Corrida')
            .should('contain.text','Natacao')
            
            expect($el.val()).to.have.length(2)
             expect($el.val()).to.have.members(['futebol', 'Corrida'])

    })
})

})