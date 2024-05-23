const Calculator = require('./Calculator');

describe('Quando dividir 2 numeros', () => {
    it('deve dividir 2 numeros', () => {
        expect(Calculator.dividir(8,2)).toBe(4);
    })
    it('deve retornar um Error quando dividir por zero', () => {
        expect(() => {
            Calculator.dividir(5,0)
        }).toThrow(Error)
    })
    it('deve mostrar uma mensagem de erro amigavel quando tentar dividir por zero', () => {
        expect(() => {
            Calculator.dividir(7,0)
        }).toThrow("Não é possível dividir por zero")
    })
})

describe('Quando somar 2 numeros', () => {
    // it('deve somar 2 numeros', () => {
    //     expect(Calculator.somar(2,2)).toBe(4);
    //     expect(Calculator.somar(2,3)).toBe(5);
    // })
    it.todo('deve verificar se não está multiplicando')
})
    