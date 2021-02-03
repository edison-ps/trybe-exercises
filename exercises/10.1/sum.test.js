const sum =require('./sum');

describe('Soma de 4 e 5', () => {
  test('A funcao recebe 4 e 5 retornando 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('A funcao recebe 0 e 0 retornando 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('A funcao recebe 4 e "5" retornando erro', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  test('A funcao recebe 4 e "5" retornando erro', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
  
})