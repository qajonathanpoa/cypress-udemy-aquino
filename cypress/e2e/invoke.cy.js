/// <reference types="cypress" />
//O invoke serve para acessar as funções dentro do cypress
describe('Aprendendo sobre o uso do Invoke',()=>{

    it('Cria um objeto e usa o invoke',()=>{
        const pegaValor = () => 1
        
        //Criando uma função de nome fn e passando a variavel pegaValor como objeto
        cy.wrap({fn: pegaValor}).invoke('fn').should('be.equal',1)
        
    })
    it('Cria um objeto com dois parametros a e b para somar e usa o invoke para chama-la',()=>{
        const soma = (a, b) => a + b 
        
        //Criando uma função de nome fn e passando a variavel pegaValor como objeto
        cy.wrap({fn: soma}).invoke('fn', 2 , 5).should('be.equal', 7)
        
    })
})