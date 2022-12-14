import {   filterGender } from './data.js';
// import rickandmorty from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from './data/rickandmorty/rickandmorty.js';
// console.log(example, data);


//La data tomada del archivo './data/rickandmorty/rickandmorty.js'
const dataResult = data.results;

// console.log(dataResult, typeof dataResult);

// Crear una funcion para que me tome los datos del objeto y mediante un div los va agregar

const containerElement = (obj) =>{

  //Crear Nodos
  const divElement = document.createElement('div');
  divElement.setAttribute('class', 'cardDiv');
  divElement.innerHTML=`<div class='cardBoxDiv'>
  <img src="${obj.image}"/>
<h2>${obj.name}h</h2>
</div>
<div class="contenedorModal">
    <span class="close">&times;</span>
    <h2>${obj.name}</h2>
    <img src="${obj.image}"/>
    <p> Estado: ${obj.status}</p>
    <p> Especie: ${obj.species}</p>
    <p> Genero: ${obj.gender}</p>
    <p> Origen: ${obj.origin.name}</p>
    <p> Locacion: ${obj.location.name}</p>
  </div>`;

  //Mostrar el Modal con todos los datos completos
  divElement.querySelector('.cardBoxDiv').addEventListener('click', () => {
    divElement.querySelector('.contenedorModal').style.display = 'block';
    document.querySelector('.my-modal').style.display = 'block';
  });
 
  //Ocultar el modal con todos los datos
  divElement.querySelector('.close').addEventListener('click', () => {
    divElement.querySelector('.contenedorModal').style.display = 'none';
    document.querySelector('.my-modal').style.display = 'none';
  });

  return divElement;
}

//Seleccionar el padre
const insertAllResult = document.querySelector('.resultCard');

const verPersonajes = (data) =>{
  data.forEach(obj => {
    insertAllResult.appendChild(containerElement(obj))
  });
}
verPersonajes(dataResult);



// El boton del Genero en HTML
const filterGenderEl = document.querySelector("#gender");

//Filtro por genero
filterGenderEl.addEventListener('change', function() {
  insertAllResult.innerHTML = "";
  const gender = verPersonajes(filterGender(dataResult,filterGenderEl.value));
  gender;
  // console.log(filterGenderEl.value);
  // console.log(gender);
});

console.log( typeof dataResult);

// // filtro Huevos por kilometro
// const filtrarHuevos = document.querySelector('#filtrar-huevos-km');
// filtrarHuevos.addEventListener('change', () => {
//   insertAllPokemon.innerHTML = '';
//   verPokemon(filtrarpokemonKm(POKEMON, filtrarHuevos.value));
// });

