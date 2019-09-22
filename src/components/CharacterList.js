import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { tsPropertySignature } from "@babel/types";
import WelcomePage from "./WelcomePage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  // debugger
  const api = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    axios
      .get(api)
      .then(resp => {
        setCharacters(resp.data.results);
      })

      .catch(error => {
        console.log(error);
      });
  }, []);
  const CardSDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
  `;
  return (
    <section className="character-list">
      <CardSDiv>
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
      </CardSDiv>{" "}
    </section>
  );
}
