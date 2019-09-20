import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Button';
import styled from 'styled-components';

export default function CharacterCard(props) {

  const StyledCardHolder = styled.div`
  
  background: yellow;
  
  `

  return (
    <StyledCardHolder>
    <h1>Name: {props.name}</h1>
    <p>Species: {props.species}</p>
    <span>Gender: {props.gender}</span>
    <p>Location: {props.location}</p>
    <img src={props.image} />
	    </StyledCardHolder>
    )




}
