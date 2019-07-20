import { useState, useEffect, useRef } from "react";

import { search } from "./commands";

function useTerminal(initLines = []) {
  const [lines, setLines] = useState(initLines);
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

    const linesPlusCommand = [...lines, { value: command, command: true }];

    return !command
      ? setLines(linesPlusCommand)
      : setLines([...linesPlusCommand, { value: search(command) }]);
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
