import { createInterface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Pokedex > ',
    });
    const commands = getCommands();
    const api = new PokeAPI();
    return { readline, commands, api, nextLocationsURL: null, prevLocationsURL: null };
}
