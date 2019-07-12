import styled from "@emotion/styled";
import Color from "../../../utils/color";

const ProfileStyled = styled.summary`
  word-break: break-all;
  font-size: 1rem;

  h1 > span {
    padding-right: 1rem;
  }

  p,
  section {
    margin: 0.5rem 0;
  }

  section > ul {
    padding-inline-start: 1rem;
  }

  mark {
    background: none;
    color: ${Color.alternative};
  }
`;

export { ProfileStyled };
