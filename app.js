const poke_container = document.getElementById('poke-container');
const pokemon_count = 905;
const colors={                                           
    fire:'#FDDFDF',
    water: '#9ADCFF',
	electric: '#def3fd',
	grass: '#defde0',
	ice: '#96D9D6',
	fighting: '#e6e0d4',
	poison: '#c39af7d8',
	ground: '#f4e7da',
	flying: '#f5f5f5',
	psychic: '#eaeda1',
	bug: '#E7FBBE',
	rock: '#d5d5d4',
	ghost: '#7C99AC',
	dragon: '#97b3e6',
	steel: '#B7B7CE',
	fairy: '#D685AD',
    normal:'#F5F5F5'
};

// fire: "#fddfdf",
//     grass:"#defde0",
//     electirc:"#def3fd",
//     ground:"#f4e7da",
//     rock:"#d5d5d4",
//     fairy:"#fceaff",
//     poision:"#c39af7d8",
//     bug:"#f8d5a3",
//     dragon:"#97b3e6",
//     psychic:"#eaeda1",
//     flying:"#f5f5f5",
//     fighting:"#e6e0d4",
//     normal:"#f5f5f5"

async function fetchPokemon(){
    for(let i=1;i<=pokemon_count;i++){
        await getPokemon(i)
    }

}

 async function getPokemon(id)
{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    creatPokemonCard(data);

}



function creatPokemonCard(pokemon)
{
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

     const type = pokemon.types[0].type.name
    const pokemon_id = pokemon.id.toString().padStart(3,'0');
    const color = colors[type];

    pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML= 
    `<div class="img-container">
       <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon_id}.png" alt=""> 
     </div> 

     <div class="info">
       <span class="number">${pokemon_id}</span>
       <h3 class="name">${pokemon.name}</h3> 
       <small class="type">Type : <span>${type}</span>  
       </small>
     </div>`

     pokemonEl.innerHTML = pokemonInnerHTML;
     poke_container.appendChild(pokemonEl);

}

fetchPokemon(); 