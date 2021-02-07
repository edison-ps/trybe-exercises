const uppercase = require('./exercicio001');

test('Return the uppercase caracter', () => {
  const callback = (data) => {
      expect(data).toBe('A');
  };
  uppercase('a', callback);
})