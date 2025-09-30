import { getCommands } from "./commands.js"

const commands = getCommands()
let command = ''

for (const com in commands) {
    command += `${commands[com].name}: ${commands[com].description}\n`
}

export function commandHelp() {
    console.log(`Welcome to the Pokedex!\nUsage:\n\n${command}`)
}