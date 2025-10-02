export async function commandExit(state) {
    console.log('Closing the Pokedex... Goodbye!');
    state.readline.close();
    process.exit(0);
}
