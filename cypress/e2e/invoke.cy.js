/// <reference types="cypress" />
//O invoke serve para acessar as funções dentro do cypress
describe('Aprendendo sobre o uso do Invoke',()=>{

    it('Cria um objeto e usa o invoke',()=>{
        const pegaValor = () => 1
        
        //Criando uma função de nome fn e passando a variavel pegaValor como objeto
        cy.wrap({fn: pegaValor})
        .invoke('fn').should('be.equal',1)
        
    })
    it('Cria um objeto com dois parametros a e b para somar e usa o invoke para chama-la',()=>{
        const soma = (a, b) => a + b 
        
        //Criando uma função de nome fn e passando a variavel pegaValor como objeto
        cy.wrap({fn: soma})
        .invoke('fn', 2 , 5).should('be.equal', 7)
        
    })
    it.only('Acessando um objeto e passando um valor a ser digitado',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').then($el =>{
            $el.val
            cy.get('#formNome').invoke('val', 'Texto digitado pelo Invoke')

            
        })
    })

})