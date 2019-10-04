import styled from "@emotion/styled";

import Color from "../../../../utils/color";

const ProfileStyled = styled.summary`
  word-break: initial;
  padding: 1.2rem 0;

  h1 {
    margin: 0.5rem 0;
  }

  span {
    padding-right: 1.2rem;
  }

  h1,
  section > span {
    font-size: 2rem;
  }

  section:first-of-type {
    margin: 1.2rem 0;
    display: flex;
    flex-wrap: wrap;
  }

  p,
  section {
    margin: 0.5rem 0;
  }

  mark {
    background: none;
    color: ${Color.alternative};
  }
`;

const IconStyled = styled.span`
  display: flex;
  align-items: center;
`;

const SocialStyled = styled.p`
  padding: 1rem 0;

  a {
    text-decoration: none;
    color: unset;

    span:before {
      font-size: 2rem;
    }
  }
`;

export { ProfileStyled, SocialStyled, IconStyled };
