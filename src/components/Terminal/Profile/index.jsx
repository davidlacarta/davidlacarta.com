import React from "react";

import { ProfileStyled, SocialStyled } from "./ProfileStyled";

const data = {
  name: "David Lacarta",
  role: "Frontend developer",
  mail: "davidlacarta@gmail.com",
  skills: [
    { skill: "Javascript", icon: "icon-javascript" },
    { skill: "CSS3", icon: "icon-css3" },
    { skill: "React", icon: "icon-react" },
    { skill: "Next", icon: "icon-next-dot-js" },
    { skill: "Gatsby", icon: "icon-gatsby" }
  ],
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
  const { name, role, mail, skills, links } = data;

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
        <ul>
          {skills.map(({ skill, icon }) => (
            <li key={skill}>
              <span className={icon} />
              {skill}
            </li>
          ))}
        </ul>
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
