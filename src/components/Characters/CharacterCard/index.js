import React from "react";
import { dead, info } from "./characterCard.module.scss";

const CharacterCard = ({ character: { name, image, status, species } }) => {
  return (
    <article
      className={
        status === "Dead"
          ? `col-6 col-md-4 col-lg-3 ${dead}`
          : "col-6 col-md-4 col-lg-3"
      }
    >
      <img src={image} alt={`${name} avatar`} className="img-fluid" />
      <div className={info}>
        <h3 className="mb-0 text-truncate">{name}</h3>
        <p className="mb-0">
          Status:{" "}
          <span className={status === "Dead" ? dead : ""}>{status}</span>
        </p>
        <p className="mb-0">Species: {species}</p>
      </div>
    </article>
  );
};

export default CharacterCard;
