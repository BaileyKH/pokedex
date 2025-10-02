export class PokeAPI {
    private static readonly baseURL = 'https://pokeapi.co/api/v2';

    constructor() {}

    async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
        const fullURL = `${PokeAPI.baseURL}/location-area`
        const url = pageURL ?? fullURL
        const res = await fetch(url, {
            method: 'GET',
        })

        const data = await res.json() as {
            next: string | null
            previous: string | null
            results: { name: string; url: string }[]
        }

        return { next: data.next, previous: data.previous, results: data.results.map(({name}) => ({name})) }
    }

    // async fetchLocation(locationName: string): Promise<Location> {
    //     // TODO
    // }
}

export type ShallowLocations = {
    next: string | null
    previous: string | null
    results: { name: string }[]
}

export type Location = {
    // TODO
}