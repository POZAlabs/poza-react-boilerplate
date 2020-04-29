import React from "react";
import styled from "styled-components";
import Logo from "../assets/svgs/logo.svg";

const App: React.FC = () => {
  return (
    <Wrapper>
      <h1>This is Demo</h1>
      <Logo />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default App;
