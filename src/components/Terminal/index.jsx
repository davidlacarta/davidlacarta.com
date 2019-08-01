import React from "react";

import { TerminalStyled, CommandStyled, ResultStyled } from "./styles";
import useCommand from "./useCommand";
import useCursor from "./useCursor";
import { search } from "./commands";

function CommandLines({
  refCommands,
  lines,
  command,
  cursorShifts,
  cursorPaused
}) {
  const cursorPosition = command.length - cursorShifts;

  const [beforeCursor, inCursor, afterCursor] = [
    command.slice(0, cursorPosition),
    command.charAt(cursorPosition),
    command.slice(cursorPosition + 1)
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
  const history = [
    { value: search("profile") },
    { value: 'Type "help" to begin' }
  ];

  const {
    refCommand,
    refCommandHistory,
    handleOnFocus: handleOnFocusCommand,
    handleKeyDown: handleKeyDownCommand,
    handleChange,
    commandHistory,
    command
  } = useCommand(history);

  const {
    handleOnFocus: handleOnFocusCursor,
    handleOnBlur,
    handleKeyDown: handleKeyDownCursor,
    shifts,
    paused
  } = useCursor(command);

  function handleOnFocusTerminal(event) {
    handleOnFocusCommand(event);
    handleOnFocusCursor(event);
  }

  function handleKeyDownInput(event) {
    handleKeyDownCommand(event);
    handleKeyDownCursor(event);
  }

  return (
    <TerminalStyled onClick={handleOnFocusTerminal}>
      <CommandLines
        refCommands={refCommandHistory}
        lines={commandHistory}
        command={command}
        cursorShifts={shifts}
        cursorPaused={paused}
      />
      <input
        ref={refCommand}
        onKeyDown={handleKeyDownInput}
        onChange={handleChange}
        onBlur={handleOnBlur}
        aria-label="command input"
      />
    </TerminalStyled>
  );
}

export default Terminal;
