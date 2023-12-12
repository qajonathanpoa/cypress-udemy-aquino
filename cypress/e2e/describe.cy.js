/// <reference types="cypress" />

describe('template spec', () => {
  it('A external test',() =>{

  })
})

describe('Login teste',() =>{
  it('Login com sucesso', ()=>{
    console.log('teste')
    
  })

  describe('Logout',()=>{
    it.skip('teste de it dentro do describe', ()=>{
      console.log('teste')
    })
  })

})