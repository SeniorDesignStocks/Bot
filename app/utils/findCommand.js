module.exports = function findCommand(str, command) {
  const fullCommand = `!${command}`

  if (str.startsWith(`${fullCommand} `) || str === fullCommand) {
    return str.substr(fullCommand.length).trim();
  }
}
