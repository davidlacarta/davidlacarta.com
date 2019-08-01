import { useState, useEffect, useRef } from "react";

import { search } from "./commands";

function useCommand(history = []) {
  const [commandHistory, setCommandHistory] = useState(history);
  const [command, setCommand] = useState("");

  const refCommand = useRef();
  const refCommandHistory = useRef();

  useEffect(() => {
    updateScroll();
  }, [commandHistory]);

  function newCommand() {
    const value = refCommand.current.value;

    refCommand.current.value = "";
    setCommand("");

    return value;
  }

  function updateScroll() {
    refCommandHistory.current.scrollIntoView(false);
  }

  function executeCommand() {
    const command = newCommand();

    if (/^clear$/i.test(command)) {
      return setCommandHistory([]);
    }

    const commandHistoryPlusCommand = [
      ...commandHistory,
      { value: command, command: true }
    ];

    return !command
      ? setCommandHistory(commandHistoryPlusCommand)
      : setCommandHistory([
          ...commandHistoryPlusCommand,
          { value: search(command) }
        ]);
  }

  function handleOnFocus() {
    refCommand.current.focus();
  }

  function handleKeyDown({ key }) {
    if (key === "Enter") {
      executeCommand();
    }
  }

  function handleChange(event) {
    setCommand(event.target.value);
  }

  return {
    refCommand,
    refCommandHistory,
    handleOnFocus,
    handleKeyDown,
    handleChange,
    commandHistory,
    command
  };
}

export default useCommand;
