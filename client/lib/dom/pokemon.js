import { insertLast } from "./insert.js";


export function getPokemonData(n){
  const promiseArray = Array(n).fill(null).map((item,i)=>{
    // const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
    return fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).then((item)=>item.json())
  })
  return promiseArray;
}

export function createPokemonCard({name,image,id,type}){
  return/* html */ `
  <li data-id="${id}">
    <button type="button">
      <div class="visual"><img src="${image}" alt="" /></div>
      <div class="types">
        <span class="${type[0]}">${type[0]}</span>
        ${
          typeof type[1] === 'undefined' ? 
          '' : 
          `<span class="${type[1]}">${type[1]}</span>`
        }
      </div>
      <div class="name">${name}</div>
    </button>
  </li>
`
}


export function renderPokemon(target,data){
  insertLast(target,createPokemonCard(data))
}

