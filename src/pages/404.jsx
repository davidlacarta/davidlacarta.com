import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function NotFound() {
  return (
    <Layout>
      <SEO />
      <SectionStyled>
        <nav>
          <Link to="/">
            <span role="img" aria-label="house">
              🏠
            </span>
          </Link>
        </nav>
        <h1>404</h1>
      </SectionStyled>
    </Layout>
  );
}

const SectionStyled = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default NotFound;
