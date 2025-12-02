import { Calculator } from './calculator';

describe('Calculator', () => {
  describe('Test for multiply method', () => {
    it('should return twelve when multiplying 4 and 3', () => {
      // Arrange
      let calculator = new Calculator();
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
    it('divide for a number', () => {
      let calculator = new Calculator();
      let result1 = calculator.divide(15, 5);
      let result2 = calculator.divide(20, 4);
      expect(result2).toEqual(5);
      expect(result1).toEqual(3);
    });

    it('should return null when dividing by 0', () => {
      let calculator = new Calculator();
      let result = calculator.divide(10, 0);
      expect(result).toBeNull();
    });
  });
});
