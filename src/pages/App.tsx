import React from "react";
import styled, { keyframes } from "styled-components";
import ReactLogo from "../assets/svgs/react.svg";
import PozalabsLogo from "../assets/svgs/pozalabs.svg";

const App: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        React Boilerplates created by{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="http://pozalabs.com"
        >
          POZAlab
        </Link>
      </Header>
      <Logos>
        <LogoLink
          target="_blank"
          rel="noopener noreferrer"
          href="http://pozalabs.com"
        >
          <PozalabsLogo className="pozalabs-logo" />
        </LogoLink>
        <ReactLogo className="react-logo" />
      </Logos>
      <Description>{process.env.EXAMPLE_VARIABLE}</Description>
    </Wrapper>
  );
};

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
`;

const Link = styled.a`
  text-decoration: none;
  color: #515def;
  cursor: pointer;

  & :visited {
    color: #515def;
  }
`;

const Header = styled.h1`
  font-size: 48px;
`;

const Description = styled.h2`
  font-size: 32px;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 33vw;
    pointer-events: none;
  }

  > .react-logo {
    animation: ${rotateAnimation} infinite 20s linear;
    fill: #61dafb;
  }
`;

const LogoLink = styled.a`
  width: 33vw;

  > .pozalabs-logo {
    fill: #515def;
  }
`;

export default App;
