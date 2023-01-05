import { filterGender, filterSpecies, filterLocation, filterOrigin, filterCharacters, filterStatus, oderAlphabetically} from '../src/data.js';


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

describe('filterSpecies', () => {
  it('is a function', () => {
    expect(typeof filterSpecies).toBe('function');
  });
  it('deberia filtrar por especies', () => {
    const data = [{species: "Human"},{species: "Alien"}];
    const string= "Human";
    const nuevoArray= [{species: "Human"}];
    expect(filterSpecies(data,string)).toEqual(nuevoArray);
  });
});


describe('filterLocation', () => {
  it('is a function', () => {
    expect(typeof filterLocation).toBe('function');
  });
  it('deberia filtrar por locacion', () => {
    const data = [
      {location:{
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      }},{"location": {
        name: "The Menagerie",
        url: "https://rickandmortyapi.com/api/location/25"
      }
      }];
    const string= "Earth (Replacement Dimension)";
    const nuevoArray= [{location:{
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20"
    }}];
    expect(filterLocation(data,string)).toEqual(nuevoArray);
  });
});

describe('filterOrigin', () => {
  it('is a function', () => {
    expect(typeof filterOrigin).toBe('function');
  });
  it('deberia filtrar por locacion', () => {
    const data = [
      {"origin": {
        "name": "unknown",
        "url": ""
      }},{"origin": {
        "name": "Cronenberg Earth",
        "url": "https://rickandmortyapi.com/api/location/12"
      }
      }];
    const string= "unknown";
    const nuevoArray= [{"origin": {
      "name": "unknown",
      "url": ""
    }}];
    expect(filterOrigin(data,string)).toEqual(nuevoArray);
  });
});


describe('filterCharacters', () => {
  it('is a function', () => {
    expect(typeof filterCharacters).toBe('function');
  });
  
  it('deberia filtrar por nombres', () => {
    const data = [{name: "Black Rick",},{name: "Birdperson"},{name: "Bill"}];
    const string= "bill";
    const nuevoArray= [{name: "Bill"}];
    expect(filterCharacters(data,string)).toEqual(nuevoArray);
  });
});

describe('filterStatus', () => {
  it('is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });
  
  it('deberia filtrar por estado', () => {
    const data = [{status: "unknown"},{status: "Alive"}];
    const string= "Alive";
    const nuevoArray= [{status: "Alive"}];
    expect(filterStatus(data,string)).toEqual(nuevoArray);
  });
});

describe('oderAlphabetically', () => {
  it('is a function', () => {
    expect(typeof oderAlphabetically).toBe('function');
  });
  
  it('deberria filtrar por nombre de la A-Z', () => {
    const data = [{name: "Bill"},{name: "Body Guard Morty"},{name: "Big Morty"}];
    const string= "A-Z";
    const nuevoArray= [{name: "Big Morty"},{name: "Bill"},{name: "Body Guard Morty"}];
    expect(oderAlphabetically(data,string)).toEqual(nuevoArray);
  });
  it('deberia filtrar por nombre de la Z-A', () => {
    const data = [{name: "Bill"},{name: "Body Guard Morty"},{name: "Big Morty"}];
    const string= "Z-A";
    const nuevoArray= [{name: "Body Guard Morty"},{name: "Bill"},{name: "Big Morty"}];
    expect(oderAlphabetically(data,string)).toEqual(nuevoArray);
  });
});
