/// <reference types="cypress" />

describe('Fixtures tests', function () {
    beforeEach(function () {
        cy.visit('https://wcaquino.me/cypress/componentes.html')



    })
    const comida = ['carne', 'frango', 'pizza', 'vegetariano']
    comida.forEach(food => {
        it(`Realizando testes dinamicos com o foreach ${food}`, function () {
            cy.fixture("userData").then(function (dados) {
                this.payload = dados;



                cy.get('#formNome').type(this.payload.nome)
                cy.get('#formSobrenome').type(this.payload.sobrenome)
                cy.get(`[id*=${this.payload.sexo}]`).click()
                cy.get("#formComidaFavorita tr td").find(`[value=${food}]`).click()
                cy.get("#formEscolaridade").select(this.payload.escolaridade)

                //o combo multiseleção recebe o valor do arquivo fixture bruto, sem necessidade
                //de passar dentro de alguma variável
                cy.get("#formEsportes").select(this.payload.esportes)




            })
        })

        it.only('Deve selecionar todos usando o each', function () {

            cy.get('#formNome').type("Jonathan")
            cy.get('#formSobrenome').type("Cavalca")
            cy.get('[name=formSexo][value=F]').click()
            cy.get("[name=formComidaFavorita]").each($el => {
                if ($el.val() !='vegetariano')
                    cy.wrap($el).click()
            })
            cy.get("#formEscolaridade").select('Doutorado')






        })


    })
})
