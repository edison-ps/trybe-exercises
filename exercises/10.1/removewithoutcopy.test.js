const { TestScheduler } = require('jest');
const myRemove = require('./removewithoutcopy');

describe('Recebe um array + item e remove o item', () => {
  test('Recebe [1, 2, 3, 4], 3 e retorna [1, 2, 4]', ( ) => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Recebe [1, 2, 3, 4], 3 e nao retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});