import React, { useState } from "react";
import "./../../styles/Seeker.scss";
import { useForm } from "react-hook-form";
import parseUrl from "./ParseUrl";
import axios from "axios";

const Seeker = () => {
  const { register, handleSubmit, errors } = useForm();

  const [state, setState] = useState([]);

  const axiosGet = (var_pokemon) => {
    axios
      .get(parseUrl(var_pokemon))
      .then(function (response) {
        let datos = response.data;
        setState(datos);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (dataOfForm) => {
    axiosGet(dataOfForm.seeker_pokemon);
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
