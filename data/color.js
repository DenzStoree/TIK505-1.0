require("./module")
const color = (text, color) => {
  return !color ? chalk.green(text) : chalk.hex(color)(text)
}

const bgcolor = (text, bgcolor) => {
  return !bgcolor ? chalk.green(text) : chalk.bgHex(bgcolor)(text)
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

global.color = color
global.bgcolor = bgcolor
global.sleep = sleep