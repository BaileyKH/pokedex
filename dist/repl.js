import { createInterface } from "node:readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Pokedex > ',
});
export function cleanInput(input) {
    return input.toLowerCase().trim().split(/\s+/);
}
export function startREPL() {
    rl.prompt();
    rl.on('line', (input) => {
        const inputArr = cleanInput(input);
        if (inputArr.length <= rl.prompt.length) {
            return rl.prompt();
        }
        console.log(`Your command was: ${inputArr[0]}`);
        rl.prompt();
    });
}
