/// <reference types="cypress" />

describe('Teste de Login com Cypress', () => {
    it('Logar com sucesso', () => {
      // 1. Acessar a url
      cy.visit('https://wcaquino.me/cypress/componentes.html');
  
      // 2. Clicar sobre o elemento
      cy.get('#formCadastrar').click();
  
      // 3. Validar o texto do alerta com método stub getCall
      cy.window().then((win) => {
        const alertStub = cy.stub(win, 'alert').as('alertStub');
  
        // 4. Preencher nome com texto Jonathan
        cy.get('#formNome').type('Jonathan');
  
        // 5. Clicar sobre o elemento
        cy.get('#formCadastrar').click().then(() => {
          // 6. Validar o texto do alerta com método stub getCall
          expect(alertStub.getCall(0)).to.be.calledWith('Sobrenome eh obrigatorio');
        });
      });
    });
  });
  