import React from "react";
import Terminal from "../components/Terminal";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

function Index() {
  return (
    <Layout>
      <SEO title="Profile" />
      <Terminal />
    </Layout>
  );
}

export default Index;
