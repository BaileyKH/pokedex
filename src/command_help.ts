import { State } from "./state.js"

export async function commandHelp(state: State) {
    const lines: string[] = []

    for (const name in state.commands) {
        const cmd = state.commands[name]
        lines.push(`${cmd.name}: ${cmd.description}`)
    }
    console.log(`Welcome to the Pokedex!\nUsage:\n\n${lines.join("\n")}`)
}