/// <reference types="cypress" />


describe('Uso de find para encontrar elementos', () => {

    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')


    })

    it("Validar o uso do Find botão Listar", function () {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 2')


    })
    it.only('Buscar comida favorita com o find', () => {
            const comida = ['Pizza','Carne','Frango','Vegetariano']
            cy.get('#formComidaFavorita tbody tr td label')
             
            .each(($element) => {
             return $element
      })
      .then(($element) => {
                
                expect(comida).to.have.members(['Pizza','Carne','Frango','Vegetariano'])
                expect($element).to.have.length(4) // true
                
      })
 })

    })


