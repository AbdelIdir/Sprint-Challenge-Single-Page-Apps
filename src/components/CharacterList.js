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
  const [mainApi, setMainApi] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const [page, setPage] = useState("");
  // debugger
  const api = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    axios
      .get(mainApi)
      .then(resp => {
        let pageSystem = resp.data.info;
        console.log(pageSystem);
        setPage(pageSystem);
        let res = resp.data.results;
        setCharacters(res);
      })

      .catch(error => {
        setError(alert(`Something is wrong with your request ${error}`));
      });
  }, [mainApi]);

  const handleSubmit = event => {
    // console.log(props.characters);
    event.preventDefault();

    const foundCharacter = characters.find(
      char =>
        char.name.toUpperCase().toLowerCase() ===
        event.target.search.value.toUpperCase().toLowerCase()
    );
    setSearchResults(foundCharacter);
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
        <button onClick={() => setMainApi(page.prev)}>previous</button>
        <button onClick={() => setMainApi(page.next)}>next</button>

        {characters.map(char => {
          return (
            <CharacterCard
              key={char.id}
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
