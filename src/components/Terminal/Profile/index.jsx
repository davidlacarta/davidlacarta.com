import React from "react";

import { ProfileStyled } from "./ProfileStyled";

function Profile() {
  return (
    <ProfileStyled>
      <h1>
        <span role="img" aria-label="rocket">
          ‍🤖
        </span>
        David Lacarta
      </h1>
      <p>---------------------</p>
      <p>
        <mark>OS</mark>: Frontend developer
      </p>
      <section>
        <mark>Packages</mark>:
        <ul>
          <li>Javascript </li>
          <li>CSS3 </li>
          <li>React </li>
          <li>Next </li>
          <li>Gatsby</li>
        </ul>
      </section>
      <p>
        <mark>Uptime</mark>: 8 years
      </p>
      <p>
        <mark>Terminal</mark>: davidlacarta@gmail.com
      </p>
    </ProfileStyled>
  );
}

export default Profile;
