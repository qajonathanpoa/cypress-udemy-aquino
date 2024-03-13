/// <reference types="cypress" />
const payload = this.payload.esportes
describe('Fixtures tests', function () {
    beforeEach(function () {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

       
            
    })
        
    payload.forEach (esporte =>{   
    it('Realizando testes dinamicos', function () {
        cy.fixture("userData").then(function (dados) {
            this.payload = dados;       
            
        
           
            cy.get('#formNome').type(this.payload.nome)
            cy.get('#formSobrenome').type(this.payload.sobrenome)
            cy.get(`[id*=${this.payload.sexo}]`).click()
            cy.get("#formComidaFavorita tr td").find(`[value=${this.payload.comida}]`).click()
            cy.get("#formEscolaridade").select(this.payload.escolaridade)
            
            //o combo multiseleção recebe o valor do arquivo fixture bruto, sem necessidade
            //de passar dentro de alguma variável
            cy.get("#formEsportes").select(`${esporte}`)


        

        })
        })
    

    })
})
