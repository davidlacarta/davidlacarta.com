import React from "react";

import Help from "./Help";
import Profile from "./Profile";
import Skills from "./Skills";

const commands = {
  profile: <Profile />,
  help: <Help />,
  skills: <Skills />,
  whoami: "David Lacarta",
  role: "Frontend developer",
  mail: "davidlacarta@gmail.com",
  ls: "README.md passwords",
  cat: "file is missing - cat [file]",
  "cat readme.md":
    'To execute a command with root permissions type "sudo [command]"',
  "cat passwords": "permission denied",
  "sudo cat passwords": "you are a hacker! ☠️️",
  "sudo rm -rf /": "you are a hacker! ☠️️",
  "sudo rm -rf *": "you are a hacker! ☠️️",
  "sudo rm -rf ~": "you are a hacker! ☠️️"
};

function search(command) {
  return commands[command.toLowerCase()] || `command "${command}" not found`;
}

export { search };
