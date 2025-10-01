import { createInterface } from "readline";
import { getCommands } from "./commands.js";
export function initState() {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex > ',
    });
    const commands = getCommands();
    return { readline, commands };
}
