import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const StyledDiv = styled.div`
  background: white;
  font-size: 30px;
  display: flex;
  justify-content: space-around;
  margin: 20px 60px 20px 60px;
`;

export default function App() {
  return (
    <main>
      <Header />
      <StyledDiv>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </StyledDiv>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
    </main>
  );
}
