import { filterGender} from '../src/data.js';


describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });
  
  it('deberia filtrar por generos', () => {
    const data = [{gender:"female"},{gender:"male"}];
    const string= "female";
    const nuevoArray= [{gender:"female"}];
    expect(filterGender(data,string)).toEqual(nuevoArray);
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });