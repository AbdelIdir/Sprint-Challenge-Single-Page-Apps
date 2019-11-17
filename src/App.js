import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";
import LocationList from "./components/LocationsList";
import { Route, NavLink } from "react-router-dom";
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
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/locations">Locations</NavLink>
      </StyledDiv>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/locations" component={LocationList} />
    </main>
  );
}
