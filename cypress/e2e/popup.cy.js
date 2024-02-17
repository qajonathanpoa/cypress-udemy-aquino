/// <reference types="cypress" />

describe('Trabalhando com popups no cypress', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    it('Deve testar se popup foi invocado', () => {

        cy.window().then(win => {
            //Utilizando o método open para invocar a popup
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
    })
    it('Checando popups por links', () => {

        cy.contains('Popup2').should('have.prop', 'href')
            .and('equal', 'https://wcaquino.me/cypress/frame.html')
    })
    //Acessando uma pagina pelo href utilizando o prop do jquery
    it('Deve acessar popups dinamicamente', () => {
        cy.contains('Popup2').then($a => {
            const href = $a.prop('href')
            cy.visit(href)
        })
        
    })
    it.only('Deve abrir link na mesma pagina e escrever um texto', () => {
        cy.contains('Popup2')
        .invoke('removeAttr', 'target')
        .click()
        cy.get('#tfield').type('funcionou!')
    })
})