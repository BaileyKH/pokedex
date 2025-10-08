import { Cache } from "./pokecache.js";
export class PokeAPI {
    static baseURL = 'https://pokeapi.co/api/v2';
    cache;
    constructor() {
        this.cache = new Cache(10000);
    }
    async fetchLocations(pageURL) {
        const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
        const cached = this.cache.get(url);
        if (cached)
            return cached;
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        this.cache.add(url, data);
        return data;
    }
}
