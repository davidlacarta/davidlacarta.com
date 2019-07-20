import React from "react";
import styled from "@emotion/styled";

import Color from "../../../../utils/color";

const commands = [
  { name: "profile", description: "show profile" },
  { name: "role", description: "show role" },
  { name: "skills", description: "show skills" },
  { name: "mail", description: "show mail" },
  { name: "whoami", description: "show who am i" },
  { name: "ls", description: "list files" },
  { name: "cat [file]", description: "show [file]" },
  { name: "clear", description: "clear screen" }
];

function Help() {
  return (
    <>
      <p>System commands:</p>
      <ListStyled>
        {commands.map(({ name, description }) => (
          <li key={name}>
            <span>{name}</span>
            <span>{description}</span>
          </li>
        ))}
      </ListStyled>
    </>
  );
}

const ListStyled = styled.ul`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  li {
    position: relative;
    display: grid;

    > span:first-of-type {
      color: ${Color.alternative};
      :before {
        content: "- ";
        color: ${Color.front};
        position: absolute;
        left: -1rem;
      }
    }
    @media (min-width: 400px) {
      grid-template-columns: 1fr 2fr;
    }
  }
`;

export default Help;
