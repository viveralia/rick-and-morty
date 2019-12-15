import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import AllCharacters from "../Characters/AllCharacters";
import Loader from "../Loader/Grouped";

const Main = () => {
  // States with hooks
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // Fetches all characters from the Rick and Morty API
  const getAllCharacters = async () => {
    setLoading(true);
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const { results } = await response.json();
    setLoading(false);
    setCharacters(results);
  };

  // useEffect as componentDidMount
  useEffect(() => {
    getAllCharacters();
  }, []);

  // Component View
  return (
    <>
      <Header />
      {isLoading ? <Loader /> : <AllCharacters characters={characters} />}
      <Footer />
    </>
  );
};

export default Main;
