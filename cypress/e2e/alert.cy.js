/// <reference types="cypress" />



describe('Work with basic Alerts no Cypress',()=>{

    beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
     

    })
    it('Validando Link Alert na página com uso do método ON do cypress',()=>{

        cy.get('#alert').click()
        cy.on('window:alert', msg =>{
            console.log(msg)
           
            expect(msg).to.be.equal('Alert Simples')

        })

    })
    it('Validando Alert com uso de Mocks',()=>{
        const stub = cy.stub().as('Alerta simples')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(()=>{
        expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
    
        })
        it('Validando Link Alert na página com uso do método ON do cypress',()=>{

            cy.get('#alert').click()
            cy.on('window:alert', msg =>{
                console.log(msg)
               
                expect(msg).to.be.equal('Alert Simples')
    
            })
    
        
    })
    })

    it('Validando Confirm',() => {

        cy.on('window:confirm', msg =>{

            expect(msg).to.be.equal('Confirm Simples')
        
        })
        cy.on('window:alert', msg =>{

            expect(msg).to.be.equal('Confirmado')
        
        })
        cy.get('#confirm').click()

  
    })


    it('Validando negando e clicando em cancelar',() => {

        cy.on('window:confirm', msg =>{

            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg =>{

            expect(msg).to.be.equal('Negado')
        
        })
        cy.get('#confirm').click()

  
    })

    it.only('Validando Prompt',() => {

        cy.on('window:prompt', msg =>{

            expect(msg).to.be.equal('Confirm Simples')
        
        })
        // cy.on('window:alert', msg =>{

        //     expect(msg).to.be.equal('Confirmado')
        
        cy.get('#prompt').click()
        })

  
    
})
