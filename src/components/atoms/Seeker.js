import React, { useState } from "react";
import "./../../styles/Seeker.scss";
import { useForm } from "react-hook-form";

const Seeker = () => {
  const { register, handleSubmit, errors } = useForm();
  const [pokemonData, setPokemonData] = useState([]);

  const Search = (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.log(error));
  };

  const onSubmit = (data) => {
    console.log(data);
    Search(data.seeker_pokemon);
    console.log(pokemonData);
  };

  return (
    <div>
      <div className="Container_Title">
        <h1>Seeker of Pokemon :D!</h1>
      </div>
      <div className="Container_Input">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="InputSeeker"
            name="seeker_pokemon"
            placeholder="Search your pokemon"
            ref={register({ required: true })}
          />
          {errors.seeker_pokemon && <span>This field is required</span>}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Seeker;
