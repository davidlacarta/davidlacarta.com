import React from "react";

import { AsciiStyled } from "../TerminalStyled";

function Profile() {
  return (
    <AsciiStyled>
      <h1>
        <span role="img" aria-label="rocket">
          🚀
        </span>
        David Lacarta
      </h1>
      <p>---------------------</p>
      <p>
        <mark>OS</mark>: Frontend developer
      </p>
      <p>
        <mark>Packages</mark>:
        <ul>
          <li>Javascript </li>
          <li>CSS3 </li>
          <li>React </li>
          <li>Next </li>
          <li>Gatsby</li>
        </ul>
      </p>
      <p>
        <mark>Uptime</mark>: 8 years
      </p>
      <p>
        <mark>Terminal</mark>: davidlacarta@gmail.com
      </p>
    </AsciiStyled>
  );
}

export default Profile;
