import { State } from "./state.js"

export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(/\s+/)
}

export async function startREPL(state: State) {

    const rl = state.readline
    const commands = state.commands

    rl.prompt()

    rl.on('line', async (input) => {
        const [commandName] = cleanInput(input)

        if (!commandName) { 
            rl.prompt() 
            return
        }

        const cmd = commands[commandName]
        if (!cmd) {
            console.log("Unknown command")
            rl.prompt()
            return
        }

        try {
            await cmd.callback(state)
        } catch (err) {
            console.log("network error, try again")
        }

        rl.prompt()

    })

}
