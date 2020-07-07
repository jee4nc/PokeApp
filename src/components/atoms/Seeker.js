import React from "react";
import "./../../styles/Seeker.scss";
import { useForm } from "react-hook-form";

const Seeker = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

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
