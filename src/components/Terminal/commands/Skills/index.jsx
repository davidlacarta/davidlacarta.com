import React from "react";
import styled from "@emotion/styled";

const names = [
  { name: "Javascript", icon: "icon-javascript" },
  { name: "CSS3", icon: "icon-css3" },
  { name: "React", icon: "icon-react" },
  { name: "Next", icon: "icon-next-dot-js" },
  { name: "Gatsby", icon: "icon-gatsby" }
];

function Skills() {
  return (
    <ListStyled>
      {names.map(({ name, icon }) => (
        <li key={name}>
          <span className={icon} />
          {name}
        </li>
      ))}
    </ListStyled>
  );
}

const ListStyled = styled.ul`
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  li {
    padding: 0.5rem;
    display: flex;
    align-items: center;

    span {
      padding-right: 1rem;
    }
  }
`;

export default Skills;
