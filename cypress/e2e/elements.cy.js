/// <reference types="cypress" />

describe('Work with basic elements',()=>{

    beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
     

    })

    it('Buscando Textos', ()=>{

        
        //Aumentando o escopo da pesquisa utilizando o body e o contain para fazer a assertiva
        //Pode ajustar um erro quando elementos não possuem id ou class
        cy.get('body').should('contain','Cuidado')

        //E com a localização da clase .facilAchar não há necessidade de utilizar o contain e sim
        //o próprio have.text. A diferença é que o have.text espera o escopo inteiro que no caso é:
        //Cuidado onde clica, muitas armadilhas...
        cy.get('.facilAchar')
        .should('have.text','Cuidado onde clica, muitas armadilhas...')
    })
    

    it('Buscando e clicando em Links', ()=>{

        
        cy.get('[href="#"]').click()
        cy.get('#resultado') .should('have.text','Voltou!')
        cy.reload()
        
        cy.get('#resultado') .should('have.not.text','Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text','Voltou!')
        
   
            })

            it('Preenchendo Text Fields', ()=>{
                
                cy.get('#formNome').type('Jonatinha',{delay:0})
                .should('have.value', 'Jonatinha')
                
                cy.get('#elementosForm\\:sugestoes')
                .type('Text area texto',{delay:0})
                .should('have.value', 'Text area texto')

                cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
                .type('12345',{delay:0})
                //Usando comandos de tecla para apagar caracteres simulando um usuário real
                cy.get('#formSobrenome').type('Teste123456{backspace}{backspace}',{delay:0})
                .should('have.value','Teste1234')

                cy.get('#elementosForm\\:sugestoes').clear()
                //Digitando erro e em seguinda apagando e digitando acerto
                .type('Erro{selectall}acerto', { delay: 100 })
                .should('have.value', 'acerto')
            })

            it('Radio buttons', ()=>{
                
                cy.get('#formSexoFem')
                .check()
                .should('be.checked')
                cy.get('#formSexoMasc')
                .should('not.be.checked')

                cy.get("[name=formSexo]")
                .check()
                .should('be.checked')
                .should('have.length',2)
      
      
            })
            it('Clicando em checkboxes múltiplos com o check', ()=>{
                //Marcando checkboxes multiplos com o check
                cy.get('[name=formComidaFavorita]').check()
                .should('be.checked')
                .should('have.length', 4)
            
            })

            
            it.only('Clicando em checkboxes múltiplos com o click', ()=>{
                //Marcando checkboxes multiplos com o parametro multiple
                cy.get('[name=formComidaFavorita]').click({multiple: true})
                .should('be.checked')
                .should('have.length', 4)
            
                
                
            })
        
 })