import { debounce, getNode, getPokemonData, renderPokemon } from './lib/index.js';

async function pokemon() {
  const dataArray = getPokemonData(150);

  Promise.all(dataArray).then((result) => {
    const pokemon = result.map((item) => {
      return {
        name: item.name,
        type: item.types.map((type) => type.type.name),
        image: item.sprites['front_default'],
        id: item.id,
      };
    });
    pokemon.forEach((item) => {
      renderPokemon('.pokemonList', item);
    });
  });
}

pokemon();

const pokeBox = getNode('.pokemonList');
const searchInput = getNode('#searchField');


const handleSearch = debounce(()=>{
  const value = searchInput.value.toLowerCase();

  const card = [...pokeBox.children];

  for (let i = 0; i < card.length; i++) {
    if (!card[i].textContent.includes(value)) {
      card[i].style.display = 'none';
    } else {
      card[i].style.display = 'block';
    }
  }
},500)

searchInput.addEventListener('input', handleSearch);

