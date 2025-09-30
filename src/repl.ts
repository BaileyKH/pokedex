import { createInterface } from "node:readline"
import { getCommands } from "./commands.js"

const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex > ',
})

export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(/\s+/)
}

export function startREPL() {

    rl.prompt()

    rl.on('line', (input) => {
        const inputArr = cleanInput(input)
        const commands = getCommands()

        const commandName = inputArr[0]

        if (inputArr.length <= rl.prompt.length - 1) {
            return rl.prompt()
        }

        // console.log(`Your command was: ${inputArr[0]}`)
        if (commands[commandName]) {
            try {
                commands[commandName].callback(commands)
            } catch (err) {
                console.log(`Error: ${err}`)
            }
        } else {
            console.log('Unknown Command')
        }
        // console.log(getCommands())
        rl.prompt()

    })

}
