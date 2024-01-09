/// <reference types="cypress" />

// O wrap serve para pegarmos os valores de objetos dentro do cypress e com isso conseguirmos
// fazer as asserções
describe('Uso do wrap para acessar objetos no cypress', () => {

    
    it('Usando o wrap para acessar objetos', ()=>{
        const objeto = {
            idade: 12,
            nome: 'Joquinha'
        }
        //Caso se queira fazer uma asserção em um objeto ou valor que vem por fora
        //sem ser pelo cypress, por uma promise por exemplo aí temos que utilizar a notação expect
        expect(objeto).to.have.property('nome')
        //Para acessar os objetos já com a seara do cypress temos que passar o wrap 
        cy.wrap(objeto).should('have.property', 'nome')
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        const promise = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(10)
            },500)
        })
        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro numero'))
        //Promise sem utilizar o wrap, sem uso do wrap não é possível manipular a ordem de execução do teste
        //promise.then(num => console.log(num))

        //Utilizando o wrap para manipular elementos e objetos já gerenciados pelo cypress para sincronizar
        //o teste e acessar os seus retornos e valores
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('Encontrei o segundo numero'))
       
    })
    it('Asserção com e sem o uso do Wrap', ()=>{

        const objeto = {
            idade: 12,
            nome: 'Joquinha'
        }
        //Validando o objeto sem o wrap
        expect(objeto).to.have.property('nome')
         //Validando o objeto com o wrap para já poder utilizar o should da api do cypress como asserção
        cy.wrap(objeto).should('have.property', 'nome')

    })
    it('Escrevendo em um formulario com em um elemento jquery e wrap', ()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').then($el =>{
        //$el.val('Funcionando via jquery')
        cy.wrap($el).type('Funcionando via Wrap cypress!')
        })

    })
})

    
