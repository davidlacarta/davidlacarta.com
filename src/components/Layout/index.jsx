import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";

import Color from "../../utils/color";

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Global
        styles={css`
          body {
            margin: 0;
            background: ${Color.base};
            font-family: Courier New;
          }
        `}
      />
      <SectionStyled>{children}</SectionStyled>
    </LayoutStyled>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

const LayoutStyled = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionStyled = styled.section`
  background: ${Color.back};
  color: ${Color.front};
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

  @media (min-width: 800px) {
    width: 800px;
    height: 80%;
  }
`;

export default Layout;
