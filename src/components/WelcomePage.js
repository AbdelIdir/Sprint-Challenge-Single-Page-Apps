import React from "react";
import SearchForm from "./SearchForm";
import styled from "styled-components";

export default function WelcomePage() {
  const CenterDiv = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <CenterDiv>
      <section className="welcome-page">
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
          <SearchForm />
        </header>
      </section>
    </CenterDiv>
  );
}

// export default function SearchForm(props) {
