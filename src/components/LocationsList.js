import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("http://rickandmortyapi.com/api/location/").then(answer => {
      setLocations(answer.data.results);
    });
  }, []);

  return (
    <div>
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
    </div>
  );
}
