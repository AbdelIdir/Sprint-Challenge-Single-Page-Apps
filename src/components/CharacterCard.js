import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import SearchForm from "./SearchForm";
export default function CharacterCard(props) {
  // console.log(props);
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
            <br />
            <span>Location: {props.location}</span>
          </Card.Text>
          <Button
            href="https://www.imdb.com/title/tt2861424/?ref_=nv_sr_1?ref_=nv_sr_1"
            variant="primary"
          >
            Learn more about the show
          </Button>
        </Card.Body>
      </Card>
    </StyledCardHolder>
  );
}
