const ApiConnection = (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let info = data;
      console.log(info);
    })
    .catch((error) => console.log(error));
};

export default ApiConnection;
