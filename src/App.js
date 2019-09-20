import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import styled from 'styled-components'


const StyledDiv = styled.div`
background: white;
font-size: 30px;
display:flex;
justify-content: space-around;

`

export default function App() {
  
  return (
    <main>
      
      <Header />
<StyledDiv>
        <Link to="/characters">Characters </Link>
        <Link to="/" component= {WelcomePage}>Home</Link>

      </StyledDiv>
      <Route exact path= "/" component= {WelcomePage}/>
      <Route exact path= "/characters" component= {CharacterList}/>
      
    </main>
  );
}
