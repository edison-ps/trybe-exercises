const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByAge = (age) => (
      new Promise((resolve, reject) => {
        setTimeout(() => {
            const arrayAnimals = Animals.filter((object) => object.age === age);
            if (arrayAnimals.length > 0) {
                return resolve(arrayAnimals);
            }
            return reject('Nenhum animal com essa idade!');
          }, 100);
       })
   );
  
  const getAnimalAge = (age) => {
    return findAnimalByAge(age);
  };
   
// findAnimalByAge(2)
//     .then((animal) => console.log(animal))
//     .catch((error) => console.log(error));

  module.exports = getAnimalAge;