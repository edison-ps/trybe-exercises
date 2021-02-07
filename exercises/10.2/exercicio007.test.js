const getAnimalAge = require('./exercicio007');

describe('Testando promise - findAnimalByAge', () => {
    describe('Quando existe o animal com idade procurada', () => {
      test('Retorne array de objetos dos animais', () => {
        expect.assertions(1);
        return getAnimalAge(1).then(animal => {
          expect(animal).toStrictEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
        });
      });
    });
  
    describe('Quando não existe o animal a idade procurada', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimalAge(10).catch(error => {
          expect(error).toEqual('Nenhum animal com essa idade!');
        });
      });
    });
  });