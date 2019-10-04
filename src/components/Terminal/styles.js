import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/core";

import Color from "../../utils/color";

const hidde = css`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const resetListStyle = css`
  margin: 0;
  padding-inline-start: 0;
  list-style: none;
`;

const TerminalStyled = styled.section`
  width: 100%;
  height: 100%;
  padding: 30px 30px;
  box-sizing: border-box;
  overflow-y: auto;

  > ul {
    display: flex;
    flex-direction: column;
    ${resetListStyle}
  }

  > input {
    ${hidde}
  }
`;

const blink = keyframes`
  0%  { opacity: 1 }
  49% { opacity: 1 }
  50% { opacity: 0 }
  100% { opacity: 0 }
`;

const animationBlink = css`
  animation: ${blink} 1s ease infinite;
`;

const fontWidth = 11; // Roboto Mono

const LineBaseStyled = css`
  display: block;
  min-height: 1.7rem;
  word-break: break-all;
  margin-bottom: 0.5rem;
  white-space: pre-wrap;
`;

const CommandStyled = styled.li`
  ${LineBaseStyled}
  position: relative;

  :before {
    content: "$";
    display: block;
    position: absolute;
    height: 1.2rem;
    left: -15px;
  }

  > span:before {
    ${({ cursorChar }) =>
      cursorChar ? `content: "${cursorChar}"` : `content: ""`};
    position: absolute;
    color: ${Color.back};
    background: ${Color.front};
    height: 1.7rem;
    width: ${fontWidth}px;
    display: ${({ input }) => (input ? "inline-block" : "none")};
    ${({ cursorPaused }) => !cursorPaused && animationBlink}
  }
`;

const ResultStyled = styled.li`
  ${LineBaseStyled}
`;

export { TerminalStyled, CommandStyled, ResultStyled };
