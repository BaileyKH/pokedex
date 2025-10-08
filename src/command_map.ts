import { State } from "./state.js";


export async function commandMap(state: State) {
    const locations = await state.api.fetchLocations(state.nextLocationsURL)

    locations.results.forEach(r => console.log(r.name))

    state.nextLocationsURL = locations.next

    state.prevLocationsURL = locations.previous
    
}

export async function commandMapB(state: State) {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page")
        return;
    }

    let locations = await state.api.fetchLocations(state.prevLocationsURL)

    locations.results.forEach(r => console.log(r.name))
    state.nextLocationsURL = locations.next
    state.prevLocationsURL = locations.previous
}

