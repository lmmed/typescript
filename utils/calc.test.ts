import { addition, division, multiplication, substraction } from "./calc";

describe(('Calculation function'), () => {

  beforeEach(() => {
    console.log('avant');
  });

  afterEach(() => {
    console.log('après');
  });

  beforeAll(() => {
    console.log('avant tout');
  })

  afterAll(() => {
    console.log('après tout');
  })

  it(('Addition'), () => {
    expect(addition([1,3,4])).toBe(8);
    expect(addition([5,2])).toBe(7);
    expect(() => addition([])).toThrow("Il faut au minium un paramètre");
  });

  it(('Substraction'), () => {
    expect(substraction([5,2])).toBe(3);
    expect(substraction([10,8,2])).toBe(0);
    expect(() => substraction([])).toThrow("Il faut au minium un paramètre");
  });

  it('Multiplication', () => {
    expect(multiplication([5,2])).toBe(10);
    expect(multiplication([2,3,4])).toBe(24);
    expect(() => multiplication([])).toThrow("Il faut au minium un paramètre");
  });

  it('Division', () => {
    expect(division([5,2])).toBe(2.5);
    expect(() => division([5,0])).toThrow("Attention division par 0 interdite");
    expect(() => division([])).toThrow("Il faut au minium un paramètre");
  })

  it('Test', () => {
    expect(250).toBeGreaterThan(200);
    expect(500).toBeLessThan(550);
    expect(500).toBeLessThanOrEqual(500);
    expect('Coucou').toMatch(/^cou/i);
  })
})