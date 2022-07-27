
(function () {
  loadAndRenderPokemon();
})();

function loadAndRenderPokemon() {
  const pokemonList = [
    {
      id: 1,
      name: "bulbasaur"
    },
    {
      id: 4,
      name: "charmander"
    },
    {
      id: 7,
      name: "squirtle"
    }
  ];

  renderPokemonList(pokemonList);
}

function renderPokemonList(pokemonList) {
  const list = document.querySelector("ul");

  console.log(pokemonList);

  pokemonList.forEach((pokemon) => renderPokemon(list, pokemon));
}

function renderPokemon(list, pokemon) {
  const card = document.createElement("li");

  card.innerHTML = `
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png">
    <p>${pokemon.name}</p>
  `;

  list.appendChild(card);
}
