import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const { characters, setCharacters } = useState({});

  const api = 'https://rickandmortyapi.com/api/character/';


useEffect( () => {
  axios.get(api)
    .then( resp => {
      setCharacters(      console.log(resp.data.results)
      );
    })
    
}, []);

  return (
    <section className="character-list">
      {/* {characters.map(char => {
        return (
          <CharacterCard
            key={char.name}
            name={char.name}
            
          />
        );
      })} */}
    </section>
  );
}
