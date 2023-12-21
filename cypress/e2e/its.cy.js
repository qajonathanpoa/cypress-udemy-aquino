/// <reference types="cypress" />

//o its serve para pegarmos partes de um objeto ou seja, navegarmos em um objeto
//para fazer asserçoes específicas. Podemos acessar um objeto com o wrap
//E fazermos as asserções necessárias com o Its
describe('Uso do ITS para pegar uma propriedade do objeto', () => {

    
    it('Usando o Its para acessar objetos específicos', ()=>{
        const objeto = {
            idade: 12,
            nome: 'Joquinha'
        }
        cy.wrap(objeto).should('have.property', 'nome', 'Joquinha')
        
        //Com o its conseguimos pegar uma parte específica de um objeto e realizar a sua asserção
        cy.wrap(objeto).its('idade').should('equal', 12)
      
    })
    it('Usando o Its para acessar objetos aninhados como', ()=>{
    
    const obj2 = {
        idade: 12,
        nome: 'Joquinha',
        endereco: {
            rua:'rua dos bebes'}

    } 
    cy.wrap(obj2).its('endereco.rua').should('contain', 'bebes')
    
    
    })
    it.only('Usando o Its para acessar o titulo da pagina e medir o seu tamanho', ()=>{
    
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal',20)
        
        
        })
})