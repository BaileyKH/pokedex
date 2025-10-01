export function commandHelp(state) {
    const lines = [];
    for (const name in state.commands) {
        const cmd = state.commands[name];
        lines.push(`${cmd.name}: ${cmd.description}`);
    }
    console.log(`Welcome to the Pokedex!\nUsage:\n\n${lines.join("\n")}`);
}
