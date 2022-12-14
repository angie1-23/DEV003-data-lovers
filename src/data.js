
// estas funciones son de ejemplo
// const dataAll = data.results;

export const filterGender = (dataAll, string) => {
  const nuevoArray = dataAll.filter((obj) => obj.gender === string); //female Male
  return nuevoArray;
};

// export const genderData =  dataGender.filter((item) => item.Female === string);
// console.log(genderData);


// export const anotherExample = () => {
//   return 'OMG';
// };


