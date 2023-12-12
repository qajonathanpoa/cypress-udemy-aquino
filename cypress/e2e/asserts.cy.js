/// <reference types="cypress" />

it('Equality', ()=>{
    const a = 1
    expect(a,'Deveria ser 1').equal(1)
    expect(a).to.be.equal(1)
    expect('a').not.to.be.equal('b')  
})

it('Validando retornos de igualdade ou booleanos', ()=>{
    //validar

const a = true
const b = null
let c  
expect(a).to.be.true;
expect(true).to.be.true;
expect(b).to.be.null;
expect(a).to.be.not.null;
expect(c).to.be.undefined;

})

it('Validando Equalidade de objetos', ()=>{
    const obj = {
        a:1,
        b:2
    }

    expect(obj).equal(obj)
    expect(obj).to.be.equal(obj)
    //Usando a propriedade deep para comparar dois objetos
    expect(obj).to.be.deep.equal({a:1,b:2})
    expect(obj).eql({a:1,b:2})
    //Validando que existe uma propriedade especifica em um objeto
    expect(obj).include({a:1})
    //Validando que um objeto possui a propriedade b e o seu valor é 2
    expect(obj).to.have.property('b' , 2)
    //Validando que o objeto não está vazio
    expect(obj).to.not.be.empty
    expect({}).to.be.empty
})

it('Validando estrutura de dados do tipo arrays', ()=>{
const arr = [1,2,3]
expect(arr).to.have.members([1,2,3])
//Validando que alguns membros estao incluidos
expect(arr).to.include.members([1,3])
expect(arr).to.not.be.empty
})

it('Validando tipos de dados', ()=>{
    //Criando variaveis para validar
    const num = 1
    const str = "String"

    expect(num).to.be.a('number') 
    expect(str).to.be.a('string')
    //Validando que um objeto é um objeto
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('Validando dados do tipo STRING', ()=>{
    const str = 'String de teste'

    expect(str).to.be.have.length(15)
    expect(str, 'É esperado o texto igual a').to.be.equal('String de teste')
    expect(str).to.contains('de')
    //Validando por expressao regular que possui o valor de
    expect(str).to.match(/de/)
    //Validando que comeca com o termo string
    expect(str).to.match(/^String/)
    //Validando que termina com o termo teste
    expect(str).to.match(/teste$/)

    //Validando por expressao regular que possui tamanho 15
    expect(str).to.match(/.{15}/)
    //Validando que possui apenas letras
    expect(str).to.match(/\w+/)

})



it('Validando dados do tipo NUMBERS', ()=>{

    const number = 4
    const floatNumber = 5.123
    
    expect(number).to.be.equal(4)
    //Validando que numero eh maior que 4
    expect(number).to.above(3)
    //Validando que numero esta abaixo de 7
    expect(number).to.below(7)

    expect(floatNumber).to.be.equal(5.123)

    expect(floatNumber).to.above(5)
})