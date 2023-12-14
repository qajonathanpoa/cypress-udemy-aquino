# Projeto de testes aplicação campo de treinamento e aplicação contas, sites e aplicações de responsabilidade e hospedagem do professor Wagner aquino!

Projeto para realização de testes E2E, com Cypress e JavaScript (focado em testes de FRONT e API)

## Pré-requisitos:
- [NodeJS](https://nodejs.org/en/download/ "NodeJS")

## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")

## Tutorial, Instalação e execução

### Executar este projeto em sua maquina

* 1- Em um terminal, dentro da pasta do projeto, execute o seguinte comando:

**Instalar as dependências:**  
```
npm install
```
* 2- Por fim para instalação do cypress no projeto, digite o comando abaixo para instalar a última versão do cypress ou @numerodaversao desejada:

```
npm install cypress
```
### Utilizando o cypress

* 3- Em um terminal execute o comando abaixo para abrir o cypress:
```
npm run cy:open 
```

### Video instruindo a rodar comandos NPM no VisualCod

https://www.youtube.com/watch?v=yq-6cNN29hA

```
* Passo a passo - File/Preferences/Settings - Digitar npm e habilitar a opção (npm autodetect)
* Caso não apareça a opção NPM SCRIPTS clicar com o botão esquerdo do mouse sobre o explorer do VSCode e habilitar na caixa de diálogo
```

### Gerando o report de resultado dos testes com Allure Report:  

* 1-Necessário instalar o Java 8(para executar os binários Allure)

- [Java 8](https://www.oracle.com/java/technologies/downloads/#java8 "JDK")

* 2-Abrir o PowerShell e instalar o Scoop para executar o script de instalação do Allure Report no Windows
```
Commando 1
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
```
Comando 2
 Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```
* 3-No site do scoop buscar por allure e ainda no PowerShell digitar o comando:

```
scoop install allure
```