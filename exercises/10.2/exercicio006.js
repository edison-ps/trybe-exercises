const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByName = (name) => (
      new Promise((resolve, reject) => {
        setTimeout(() => {
            const arrayAnimals = Animals.find((object) => object.name === name);
            if (arrayAnimals) {
                return resolve(arrayAnimals);
            }
            return reject('Nenhum animal com esse nome!');
          }, 100);
       })
   );
  
  const getAnimal = (name) => {
    return findAnimalByName(name);
  };
   
// findAnimalByName('Dorminhoco')
//     .then((animal) => console.log(animal))
//     .catch((error) => console.log(error));

  module.exports = getAnimal;