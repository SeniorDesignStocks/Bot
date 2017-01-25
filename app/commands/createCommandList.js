// yes, this could be a JS "class" but I find this easier to understand

module.exports = function createCommandList() {
  let _commands = [];

  return {
    add: (newComponent) => _commands.push(newComponent),
    run: (message) => _commands.every((cmd) => cmd(message) === undefined),
  }
}
