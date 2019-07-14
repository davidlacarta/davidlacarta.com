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
          {[
            { skill: "Javascript", icon: "icon-javascript" },
            { skill: "CSS3", icon: "icon-css3" },
            { skill: "React", icon: "icon-react" },
            { skill: "Next", icon: "icon-next-dot-js" },
            { skill: "Gatsby", icon: "icon-gatsby" }
          ].map(({ skill, icon }) => (
            <li key={skill}>
              <span className={icon} />
              {skill}
            </li>
          ))}
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
          <a
            key={icon}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon}
          >
            <span className={icon} />
          </a>
        ))}
      </SocialStyled>
    </ProfileStyled>
  );
}

export default Profile;
