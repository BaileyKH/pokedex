export async function commandMap(state) {
    const locations = await state.api.fetchLocations(state.nextLocationsURL);
    locations.results.forEach(r => console.log(r.name));
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
}
export async function commandMapB(state) {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page");
    }
    let locations = await state.api.fetchLocations(state.prevLocationsURL);
    locations.results.forEach(r => console.log(r.name));
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
}
