import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = 'https://pokeapi.co/api/v2';
    private cache: Cache

    constructor() {
        this.cache = new Cache(10000)
    }

    async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {

        const url = pageURL ?? `${PokeAPI.baseURL}/location-area`
        const cached = this.cache.get<ShallowLocations>(url)

        if (cached) return cached

        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`)
        }

        const data: ShallowLocations = await res.json()

        this.cache.add(url, data)

        return data
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