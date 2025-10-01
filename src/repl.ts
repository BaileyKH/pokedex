import { State } from "./state.js"

export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(/\s+/)
}

export function startREPL(state: State) {

    const rl = state.readline
    const commands = state.commands

    rl.prompt()

    rl.on('line', (input) => {
        const inputArr = cleanInput(input)
        const commandName = inputArr[0]

        if (!commandName) return rl.prompt()

        const cmd = commands[commandName]

        if (cmd) {
            try {
                cmd.callback(state)
            } catch (err) {
                console.log(`Error: ${err}`)
            }
        } else {
            console.log('Unknown Commands')
        }

        rl.prompt()

    })

}
