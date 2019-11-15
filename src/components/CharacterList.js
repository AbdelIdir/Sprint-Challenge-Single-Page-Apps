import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
// import { tsPropertySignature } from "@babel/types";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import SearchForm from "./SearchForm";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState();
  const [searchResults, setSearchResults] = useState({});

  // debugger
  const api = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    axios
      .get(api)
      .then(resp => {
        setCharacters(resp.data.results);
      })

      .catch(error => {
        setError(alert(`Check your api Link for any typo: ${error}`));
      });
  }, []);

  const handleSubmit = event => {
    // console.log(props.characters);
    event.preventDefault();

    const foundCharacter = characters.find(
      char => char.name &&  char.name === event.target.search.value
    );

    setSearchResults(foundCharacter)
    
    
    ;
  };

  const CardSDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;
  return (
    <section className="character-list">
      {error}

      <CardSDiv>
        <SearchForm
          characters={characters}
          handleSubmit={handleSubmit}
          searchResults={searchResults}
        />
        {characters.map(char => {
          return (
            <CharacterCard
              key={char.name}
              name={char.name}
              species={char.species}
              status={char.status}
              gender={char.gender}
              location={char.location.name}
              image={char.image}
            />
          );
        })}
      </CardSDiv>
    </section>
  );
}
