import React from "react";

import { TerminalStyled, CommandStyled, ResultStyled } from "./styles";
import useTerminal from "./useTerminal";
import { search } from "./commands";

function CommandLines({
  refCommands,
  lines,
  command,
  cursorMoves,
  cursorPaused
}) {
  const position = command.length - cursorMoves;

  const [beforeCursor, inCursor, afterCursor] = [
    command.slice(0, position),
    command.charAt(position),
    command.slice(position + 1)
  ];

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
        <CommandStyled
          key="command"
          input
          cursorPaused={cursorPaused}
          cursorChar={inCursor}
        >
          {beforeCursor}
          <span>{inCursor}</span>
          {afterCursor}
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
  } = useTerminal([
    { value: search("profile") },
    { value: 'Type "help" to begin' }
  ]);

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
