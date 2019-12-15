import React from "react";
import CharacterCard from "../CharacterCard";

const AllCharacters = ({ characters }) => {
  return (
    <div className="container">
      <div className="row">
        {characters.map((character, i) => (
          <CharacterCard key={i} character={character} />
        ))}
      </div>
    </div>
  );
};

export default AllCharacters;
