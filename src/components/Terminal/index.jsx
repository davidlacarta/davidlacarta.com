import React, { useState, useEffect } from "react";

import { TerminalStyled, LineStyled } from "./TerminalStyled";
import commands from "./commands.json";

function Terminal() {
  const [lines, setLines] = useState([]);
  const [command, setCommand] = useState("");
  const [cursorMoves, setCursorMoves] = useState(0);
  const [cursorPaused, setCursorPaused] = useState(true);

  const refInput = React.createRef();
  const refCommands = React.createRef();

  useEffect(() => {
    updateScroll();
  }, [lines]);

  function newLine() {
    const value = refInput.current.value;

    refInput.current.value = "";
    setCommand("");

    return value;
  }

  function search(command) {
    if (!command) {
      return "";
    }

    const commandResult = commands[command];

    return commandResult || `command "${command}" not found`;
  }

  function updateCursor(key) {
    switch (key) {
      case "ArrowLeft":
        if (command.length > cursorMoves) {
          setCursorMoves(cursorMoves + 1);
        }
        break;
      case "ArrowRight":
        if (cursorMoves > 0) {
          setCursorMoves(cursorMoves - 1);
        }
        break;
      case "Delete":
        if (command.length >= cursorMoves) {
          setCursorMoves(cursorMoves - 1);
        }
        break;
      case "Home":
      case "ArrowUp":
        setCursorMoves(command.length);
        break;
      case "End":
      case "ArrowDown":
      case "Enter":
        setCursorMoves(0);
        break;
      default:
        break;
    }
  }

  let timeoutCursor = null;

  function pauseCursor() {
    setCursorPaused(true);

    clearTimeout(timeoutCursor);

    timeoutCursor = setTimeout(() => {
      setCursorPaused(false);
    }, 500);
  }

  function updateScroll() {
    refCommands.current.scrollIntoView(false);
  }

  function executeCommand() {
    const command = newLine();

    if (command === "clear" || command === "cls") {
      return setLines([]);
    }

    const commandLine = { value: command, command: true };

    if (!command) {
      return setLines([...lines, commandLine]);
    }

    const result = { value: search(command) };

    return setLines([...lines, commandLine, result]);
  }

  function handleOnFocusSection() {
    refInput.current.focus();
    setCursorPaused(false);
  }

  function handleOnBlurInput() {
    setCursorPaused(true);
  }

  function handleKeyDown({ key }) {
    pauseCursor();

    updateCursor(key);

    if (key === "Enter") {
      executeCommand();
    }
  }

  function handleChangeInput(event) {
    setCommand(event.target.value);
  }

  return (
    <TerminalStyled onClick={handleOnFocusSection}>
      <ul ref={refCommands}>
        <>
          {lines.map(({ value, command, banner }, index) => (
            <LineStyled key={index} command={command} banner={banner}>
              {value}
            </LineStyled>
          ))}
          <LineStyled
            key="command"
            command
            input
            cursorMoves={cursorMoves}
            cursorPaused={cursorPaused}
          >
            {command}
          </LineStyled>
        </>
      </ul>
      <input
        ref={refInput}
        onKeyDown={handleKeyDown}
        onChange={handleChangeInput}
        onBlur={handleOnBlurInput}
      />
    </TerminalStyled>
  );
}

export default Terminal;
