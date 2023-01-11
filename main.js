import {   filterGender,filterSpecies,filterCharacters,
  filterStatus,oderAlphabetically
       
} from './data.js';
// import rickandmorty from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from './data/rickandmorty/rickandmorty.js';
// console.log(example, data);




//La data tomada del archivo './data/rickandmorty/rickandmorty.js'
const dataResult = data.results;

const botonMenu=document.querySelector(".menu-icon");
const menu= document.querySelector(".navbar");
botonMenu.addEventListener('click', ()=>{

  menu.classList.toggle("show")});

//   if(menu.classList.toggle("show")){  
//     menu.removeClass('show');
//  } else{
//   menu.addClass('show');
// }
// })
// document.addEventListener("filter").style.display='none';

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
    <p> Status: ${obj.status}</p>
    <p> Species: ${obj.species}</p>
    <p> Gender: ${obj.gender}</p>
    <p> Origin: ${obj.origin.name}</p>
    <p> Location: ${obj.location.name}</p>
  </div>`;

  //Mostrar el Modal con todos los datos completos
  divElement.querySelector('.cardBoxDiv').addEventListener('click', () => {
    divElement.querySelector('.contenedorModal').style.display = 'block';
    
  });
 
  //Ocultar el modal con todos los datos
  divElement.querySelector('.close').addEventListener('click', () => {
    divElement.querySelector('.contenedorModal').style.display = 'none';
   
  });
  //Ocultar con escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape')
      divElement.querySelector('.contenedorModal').style.display = 'none';
  })

  return divElement;
}

//Seleccionar el padre
const insertAllResult= document.querySelector('.resultCard');

const verPersonajes = (data) =>{
  data.forEach(obj => {
    insertAllResult.appendChild(containerElement(obj));
  });
}
// verPersonajes(dataResult);
// const verPersonajes = (data) =>{
//   data.map(obj => {
//     insertAllResult.appendChild(containerElement(obj))
//   });
// }
verPersonajes(dataResult);



// El boton del Genero en HTML
const filterGenderEl = document.querySelector("#gender");

//Filtro por genero
filterGenderEl.addEventListener('change', function() {
  insertAllResult.innerHTML = "";
  verPersonajes(filterGender(dataResult,filterGenderEl.value));
  
});

// Filtro por especie

// El boton de especie en HTML

const filterSpeciesEl= document.querySelector("#species");

// Filtro por especie
filterSpeciesEl.addEventListener('change',function(){
  insertAllResult.innerHTML="";
  verPersonajes(filterSpecies(dataResult,filterSpeciesEl.value))
 
});


// })

// Boton por Status

const filterStatusEl= document.querySelector("#status");
// Filtro por locacion

filterStatusEl.addEventListener('change',function(){
  insertAllResult.innerHTML="";
  verPersonajes(filterStatus(dataResult,filterStatusEl.value))
  
})
// Buscador por personaje

const searchCharacthersEl= document.querySelector("#search");

//Filtro por personajes

searchCharacthersEl.addEventListener('input',function(){
  insertAllResult.innerHTML="";
  const characters = searchCharacthersEl.value.toLowerCase();
  verPersonajes(filterCharacters(dataResult,characters));

})

// Ordenar alfabeticamente

const orderCharacthersEl= document.querySelector("#order");

// filtro alfabeto

orderCharacthersEl.addEventListener('change',function(){
  insertAllResult.innerHTML="";
  verPersonajes(oderAlphabetically(dataResult,orderCharacthersEl.value));
 
})






