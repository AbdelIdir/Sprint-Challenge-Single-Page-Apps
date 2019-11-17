import React from "react";
// import { Formik, Form, Field } from "formik";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import styled from "styled-components";
import CharacterCard from "./CharacterCard";
export default function SearchForm(props) {
  if (!props.searchResults) {
    return (
      <div>
        <p>
          This character does not exist, Please type the full name of a
          character again.
        </p>
        <form onSubmit={props.handleSubmit}>
          <label>
            Search for a character:
            <input
              type="text"
              name="search"
              placeholder="type the entire name"
            />
          </label>
          <button>look it up !</button>
        </form>
      </div>
    );
  } else
    return (
      <div>
        <div className="searched-characters">
          {props.searchResults.name && (
            <CharacterCard
              name={props.searchResults.name}
              species={props.searchResults.species}
              status={props.searchResults.status}
              gender={props.searchResults.gender}
              location={props.searchResults.location.name}
              image={props.searchResults.image}
            />
          )}
        </div>
        <form onSubmit={props.handleSubmit}>
          <label>
            Search for a character:
            <input
              type="text"
              name="search"
              placeholder="type the entire name"
            />
          </label>
          <button>look it up !</button>
        </form>
      </div>
    );
}
