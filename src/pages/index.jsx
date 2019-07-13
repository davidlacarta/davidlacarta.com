import React from "react";
import Terminal from "../components/Terminal";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";

function Index() {
  return (
    <MainSytled>
      <Global
        styles={css`
          body {
            margin: 0;
            background: lightslategrey;
          }
        `}
      />
      <article>
        <Terminal />
      </article>
    </MainSytled>
  );
}

const MainSytled = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  article {
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }

  @media (min-width: 800px) {
    article {
      width: 800px;
      height: 80%;
    }
  }
`;

export default Index;
