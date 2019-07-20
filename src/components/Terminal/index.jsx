import React from "react";

import { TerminalStyled, CommandStyled, ResultStyled } from "./styles";
import useTerminal from "./useTerminal";

function CommandLines({
  refCommands,
  lines,
  command,
  cursorMoves,
  cursorPaused
}) {
  const position = command.length - cursorMoves;

  const commandBefore = command.slice(0, position);
  const commandInner = command.charAt(position);
  const commandAfter = command.slice(position + 1);

  return (
    <ul ref={refCommands}>
      <>
        {lines.map(({ value, command }, index) =>
          command ? (
            <CommandStyled key={index}>{value}</CommandStyled>
          ) : (
            <ResultStyled key={index}>{value}</ResultStyled>
          )
        )}
        <CommandStyled key="command" input cursorPaused={cursorPaused}>
          {commandBefore}
          <span>{commandInner}</span>
          {commandAfter}
        </CommandStyled>
      </>
    </ul>
  );
}

function Terminal() {
  const {
    refInput,
    refCommands,
    handleOnFocusSection,
    handleOnBlurInput,
    handleKeyDown,
    handleChangeInput,
    lines,
    command,
    cursorMoves,
    cursorPaused
  } = useTerminal();

  return (
    <TerminalStyled onClick={handleOnFocusSection}>
      <CommandLines
        refCommands={refCommands}
        lines={lines}
        command={command}
        cursorMoves={cursorMoves}
        cursorPaused={cursorPaused}
      />
      <input
        ref={refInput}
        onKeyDown={handleKeyDown}
        onChange={handleChangeInput}
        onBlur={handleOnBlurInput}
        aria-label="command input"
      />
    </TerminalStyled>
  );
}

export default Terminal;
