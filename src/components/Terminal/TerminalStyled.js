import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/core";

const Color = {
  front: "#DADBDD",
  back: "#353b46",
  alternative: "#F28482"
};

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
  font-family: Courier New;
  background: ${Color.back};
  width: 100%;
  height: 100%;
  padding: 10px 30px;
  box-sizing: border-box;
  overflow: hidden auto;

  ul {
    display: flex;
    flex-direction: column;
    ${resetListStyle}
  }

  input {
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

const fontWidth = 9.6; // Courier New

const LineStyled = styled.li`
  display: block;
  color: ${Color.front};
  min-height: 1rem;
  position: relative;
  word-break: break-all;
  white-space: ${({ banner }) => (banner ? "pre" : "initial")};
  padding-bottom: 0.5rem;

  span {
    color: ${Color.alternative};
  }

  :before {
    content: "$";
    display: ${({ command }) => (command ? "block" : "none")};
    position: absolute;
    left: -15px;
  }

  :after {
    content: "";
    position: absolute;
    width: ${fontWidth}px;
    height: 1rem;
    background: ${Color.front};

    display: ${({ input }) => (input ? "inline-block" : "none")};

    margin-left: ${({ cursorMoves }) =>
      cursorMoves ? `-${cursorMoves * fontWidth}px` : 0};

    ${({ cursorPaused }) => !cursorPaused && animationBlink}
  }
`;

export { TerminalStyled, LineStyled };
