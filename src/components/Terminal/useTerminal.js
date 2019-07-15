import React, { useState, useEffect, useRef } from "react";

import Profile from "./Profile";
import commands from "./commands.json";

function useTerminal() {
  const [lines, setLines] = useState([{ value: <Profile /> }]);
  const [command, setCommand] = useState("");
  const [cursorMoves, setCursorMoves] = useState(0);
  const [cursorPaused, setCursorPaused] = useState(true);

  const refInput = useRef();
  const refCommands = useRef();

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

    if (/^profile$/i.test(command)) {
      return { value: <Profile /> };
    }

    const commandResult = commands[command.toLowerCase()];

    return { value: commandResult || `command "${command}" not found` };
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

    if (/^clear$/i.test(command)) {
      return setLines([]);
    }

    const commandLine = { value: command, command: true };

    if (!command) {
      return setLines([...lines, commandLine]);
    }

    return setLines([...lines, commandLine, search(command)]);
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

  return {
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
  };
}

export default useTerminal;
