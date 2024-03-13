/// <reference types="cypress" />

describe('Fixtures tests', function () {
    beforeEach(function () {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Pegando dados de um arquivo fixture', function () {

        cy.fixture("userData").then(function (dados) {
            this.payload = dados;
            cy.get('#formNome').type(this.payload.nome)
            cy.get('#formSobrenome').type(this.payload.sobrenome)
            cy.get(`[id*=${this.payload.sexo}]`).click()
            cy.get("#formComidaFavorita tr td").find(`[value=${this.payload.comida}]`).click()
            cy.get("#formEscolaridade").select(this.payload.escolaridade)
            
            //o combo multiseleção recebe o valor do arquivo fixture bruto, sem necessidade
            //de passar dentro de alguma variável
            cy.get("#formEsportes").select(this.payload.esportes)




        })

    })
})


// teste_spec.js
describe('Teste de seleção de esportes', function () {
    beforeEach(function () {
        // Carrega os dados do arquivo fixture.json
        cy.fixture('userData').then(function (data) {
            // Define as opções de esportes como uma propriedade do contexto atual
            this.esportes = data.esportes;
        });
    });

    it('Seleciona esportes do arquivo fixture.json usando um array', function () {
        // Visita a página que contém o select
        cy.visit('https://wcaquino.me/cypress/componentes.html');

        // Utiliza um array para selecionar as opções de esportes
        cy.get('#formEsportes').select(this.esportes);
    });
});
