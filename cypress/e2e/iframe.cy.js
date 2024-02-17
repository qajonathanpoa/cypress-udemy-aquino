/// <reference types="cypress" />

describe('Teste de Login com Cypress', () => {

  beforeEach (() =>{
     // 1. Acessar a url
     cy.visit('https://wcaquino.me/cypress/componentes.html');
  
  })
    it('Deve preencher o campo texto com frame ', () => {
     cy.get('#frame1').then(iframe =>{
     const body = iframe.contents().find('body')
      cy.wrap(body).find('#tfield').type('funciona')
     })
      
    });

    it('Deve digitar o texto "goianinho" em um campo de texto dentro de um iframe e fazer a asserção do texto digitado', () => {
      const textoDigitado = 'goianinho';
  
      // Encontrar o iframe e acessar seu conteúdo
      cy.get('#frame1').then(($iframe) => {
        const iframeContent = $iframe.contents().find('body');
  
        // Encontrar o campo de texto dentro do iframe e digitar o texto
        cy.wrap(iframeContent).find('#tfield').type(textoDigitado)
        .should('have.value', textoDigitado);
      });
  
    });

    it.only('Deve digitar o texto "goianinho" no campo de texto, fazer a asserção do texto digitado, clicar no botão e fazer a asserção do alerta', () => {
      const textoDigitado = 'goianinho';
      const alertText = 'Click OK!';

      cy.visit('https://wcaquino.me/cypress/frame.html');
  
      // Encontrar o campo de texto e digitar o texto
      cy.get('#tfield').type(textoDigitado);
  
      // Fazer a asserção do texto digitado
      cy.get('#tfield').should('have.value', textoDigitado);
  
      // Encontrar e clicar no botão
      cy.get('#otherButton').click();
  
      // Fazer a asserção do alerta
      cy.on('window:alert', (str) => {
        expect(str).to.equal(alertText);
      });
    });
  
  });
  