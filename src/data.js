// estas funciones son de ejemplo

export const filterGender = (dataGender, string) => {
  const newGender=dataGender.filter((obj) => obj.Female === string);
  return newGender;
};

export const anotherExample = () => {
  return 'OMG';
};
