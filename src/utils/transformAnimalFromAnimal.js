export const transformAnimalFromAnimal = (obj) => {
  const animal = obj[0];

  return {
    age: animal.age,
    height: animal.height,
    heightUnit: animal.heightUnit,
    id: animal.id,
    name: animal.name,
    spec: {
      id: animal.spec.id,
      name: animal.spec.name,
      type: animal.spec.type,
    },
    weight: animal.weight,
    weightUnit: animal.weightUnit,
  };
};
