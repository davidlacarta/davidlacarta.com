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
          }
        `}
      />
      <Terminal />
    </MainSytled>
  );
}

const MainSytled = styled.main`
  height: 100vh;
  width: 100vw;
`;

export default Index;
