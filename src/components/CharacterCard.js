import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



export default function CharacterCard(props) {
  const StyledCardHolder = styled.div`
    margin: 30px;
    padding: 20px;
  `;

  return (
<StyledCardHolder>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <span>Species: {props.species}</span> <br />
          <span>Gender: {props.gender}</span>
          <p>Location: {props.location}</p>
        </Card.Text>
        <Button href="https://www.imdb.com/title/tt2861424/?ref_=nv_sr_1?ref_=nv_sr_1" variant="primary">Learn more about the show</Button>
      </Card.Body>
    </Card>
    </StyledCardHolder>
  );
}

// props.name}</h1>
//     <p>Species: {props.species}</p>
//     <span>Gender: {props.gender}</span>
//   <img src={props.image}   <p>Location: {props.location}
