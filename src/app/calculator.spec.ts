import { Calculator } from './calculator';

let calculator: any;

// arange
beforeEach(() => {
  calculator = new Calculator();
});

describe('Calculator', () => {
  // fdescribe('Test for multiply method', () => {  ==> poniendo una f al principio solo se ejecuta este bloque
  describe('Test for multiply method', () => {
    it('should return twelve when multiplying 4 and 3', () => {
      // Arrange
      let num1 = 4;
      let num2 = 3;
      let expected = 12;
      // Act
      let result = calculator.multiply(num1, num2);
      // Assert
      expect(result).toEqual(expected);
    });
  });

  describe('Test for divide method', () => {
    // fit('divide for a number', () => {  ==> poniendo una f al principio solo se ejecuta este test
    it('divide for a number', () => {
      //act
      let result1 = calculator.divide(15, 5);
      let result2 = calculator.divide(20, 4);
      //assert
      expect(result2).toEqual(5);
      expect(result1).toEqual(3);
    });

    it('divide for a zero', () => {
      // act y assert
      expect(calculator.divide(10, 0)).toBeNull();
      expect(calculator.divide(12340, 0)).toBeNull();
      expect(calculator.divide(-234, 0)).toBeNull();
    });
  });

  describe('Test Matchers', () => {
    it('test different matchers', () => {
      let name = 'Luis';
      let name2;

      expect(name).toBeDefined();
      expect(name2).toBeUndefined();

      expect(1 + 1 === 2).toBeTruthy();
      expect(1 + 1 === 3).toBeFalsy();

      expect(10).toBeGreaterThan(5);
      expect(5).toBeLessThan(10);

      expect('Evalua cadenas de texto').toMatch(/adena/);
      expect('Evalua cadenas de texto').not.toMatch(/noooo/);

      let fruits = ['apple', 'banana', 'orange', 'kiwi'];
      expect(fruits).toContain('banana');
      expect(fruits).not.toContain('grape');
    });
  });
});

// tipos de matchers
// toEqual => compara valores
// toBe => compara referencias
// toBeNull => comprueba si es null
// toBeUndefined => comprueba si es undefined
// toBeDefined => comprueba si no es undefined
// toBeTrue => comprueba si es true
// toBeFalse => comprueba si es false
// toBeGreaterThan => mayor que
// toBeLessThan => menor que
// toContain => comprueba si un array contiene un elemento
// toThrow => comprueba si una funcion lanza un error
