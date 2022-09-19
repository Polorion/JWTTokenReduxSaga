export const transformAnimalFromToday = (obj) => {
  const animal = obj[0];
  return {
    age: animal.animal.age,
    height: animal.animal.height,
    heightUnit: animal.animal.heightUnit,
    id: animal.id,
    name: animal.animal.name,
    spec: {
      id: animal.animal.spec.id,
      name: animal.animal.spec.name,
      type: animal.animal.spec.type,
    },
    weight: animal.animal.weight,
    weightUnit: animal.animal.weightUnit,
    info: { time: animal.time.slice(0, 5), type: animal.type },
  };
};
