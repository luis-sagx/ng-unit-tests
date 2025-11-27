import { Calculator } from './calculator';

describe('Calculator', () => {
  describe('Test for multiply method', () => {
    it('should return twelve when multiplying 4 and 5', () => {
      const calculator = new Calculator();
      const result = calculator.multiply(4, 5);
      expect(result).toBe(20);
    });
  });

  describe('Test for divide method', () => {
    it('should return 3 when dividing 15 by 5', () => {
      const calculator = new Calculator();
      const result = calculator.divide(15, 5);
      expect(result).toBe(3);
    });

    it('should return null when dividing by 0', () => {
      const calculator = new Calculator();
      const result = calculator.divide(10, 0);
      expect(result).toBeNull();
    });
  });
});
