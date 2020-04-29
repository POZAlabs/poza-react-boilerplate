import React from "react";
import styled from "styled-components";
import Logo from "../assets/svgs/logo.svg";

const App: React.FC = () => {
  return (
    <Wrapper>
      <Logo />
      <h2>{process.env.EXAMPLE_VARIABLE}</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default App;
