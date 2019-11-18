import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";
import styled from "styled-components";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("http://rickandmortyapi.com/api/location/").then(answer => {
      setLocations(answer.data.results);
    });
  }, []);
  const StyledCardHolder = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <StyledCardHolder>
      {locations.map(locate => {
        return (
          <LocationCard
            key={locate.id}
            name={locate.name}
            type={locate.type}
            dimension={locate.dimension}
            characterslivingthere={locate.residents.length}
          />
        );
      })}
    </StyledCardHolder>
  );
}
