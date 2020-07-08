const ParseUrl = (var_pokemon) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${var_pokemon}`;
  return url;
};

export default ParseUrl;
