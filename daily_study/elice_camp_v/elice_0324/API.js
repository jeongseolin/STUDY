import "babel-polyfill";
const text = document.getElementById("text");

const fetchPokemon = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  console.log(data.species.name);
  console.log(data);

  document.write(data.species.name + "n");
  const name = data.species.name;

  let output = "";

  output = output + `<li>${name}</li> `;

  document.body.innerHTML = output;
};

fetchPokemon(2);
