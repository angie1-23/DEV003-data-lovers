import { filterGender } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);
const containerElement= (obj) =>{
    const divElement= document.createElement ('div');
    divElement.setAttribute('class', 'div-Element');
    divElement.innerHTML= `
    <div class="first-container">
    <p>${obj.id}</p>
    <h2>${obj.name}</h2>
    <img src='${obj.image}'/>
    </div>
    <div class="contenedorModal">
    <span class= "close">&imes;</span>
    <h2>${obj.name}</h2>
    <img src="${obj.image}"/>
    <p> Especies: ${obj.species}</p>
    <p> Genero: ${obj.gender}</p>
    <p> Origin: ${obj.origin}</p>
    <p> Locacion: ${obj.location}</p>
    </div>`;
    divElement.querySelector('.first-container').addEventListener('click', () => {
        divElement.querySelector('.contenedorModal').style.display = 'block';
        document.querySelector('.miModal').style.display = 'block';
      });
    
      divElement.querySelector('.close').addEventListener('click', () => {
        divElement.querySelector('.contenedorModal').style.display = 'none';
        document.querySelector('.My_model').style.display = 'none';
      });
    
      return divElement;
}

