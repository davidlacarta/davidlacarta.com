import React from "react";

import { ProfileStyled, SocialStyled } from "./styles";
import Skills from "../Skills";

const data = {
  name: "David Lacarta",
  role: "Frontend developer",
  mail: "davidlacarta@gmail.com",
  links: [
    {
      href: "https://www.linkedin.com/in/davidlacarta/",
      icon: "icon-linkedin"
    },
    {
      href: "https://github.com/davidlacarta",
      icon: "icon-github"
    }
  ]
};

function Profile() {
  const { name, role, mail, links } = data;

  return (
    <ProfileStyled>
      <section>
        <span role="img" aria-label="robot">
          ‍🤖
        </span>
        <h1>{name}</h1>
      </section>
      <p>
        <mark>Role</mark>: {role}
      </p>
      <section>
        <mark>Skills</mark>:
        <Skills />
      </section>
      <p>
        <mark>Mail</mark>: {mail}
      </p>
      <SocialStyled>
        {links.map(({ href, icon }) => (
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
