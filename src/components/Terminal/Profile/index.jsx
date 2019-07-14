import React from "react";

import { ProfileStyled, SocialStyled } from "./ProfileStyled";

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
        <mark>Role</mark>: Frontend developer
      </p>
      <section>
        <mark>Skills</mark>:
        <ul>
          <li>
            <span class="icon-javascript" />
            Javascript
          </li>
          <li>
            <span class="icon-css3" />
            CSS3
          </li>
          <li>
            <span class="icon-react" />
            React
          </li>
          <li>
            <span class="icon-next-dot-js" />
            Next
          </li>
          <li>
            <span class="icon-gatsby" />
            Gatsby
          </li>
        </ul>
      </section>
      <p>
        <mark>Mail</mark>: davidlacarta@gmail.com
      </p>
      <SocialStyled>
        {[
          {
            href: "https://www.linkedin.com/in/davidlacarta/",
            icon: "icon-linkedin"
          },
          {
            href: "https://github.com/davidlacarta",
            icon: "icon-github"
          }
        ].map(({ href, icon }) => (
          <a href={href} target="_blank" rel="noopener noreferrer">
            <span class={icon} />
          </a>
        ))}
      </SocialStyled>
    </ProfileStyled>
  );
}

export default Profile;
