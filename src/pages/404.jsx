import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import styled from "@emotion/styled";
import { Link } from "gatsby";

function NotFound() {
  return (
    <Layout>
      <SEO title="404" />
      <SectionStyled>
        <nav>
          <Link to="/">
            <span role="img" aria-label="rocket">
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
