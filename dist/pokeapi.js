export class PokeAPI {
    static baseURL = 'https://pokeapi.co/api/v2';
    constructor() { }
    async fetchLocations(pageURL) {
        const fullURL = `${PokeAPI.baseURL}/location-area`;
        const url = pageURL ?? fullURL;
        const res = await fetch(url, {
            method: 'GET',
        });
        const data = await res.json();
        return { next: data.next, previous: data.previous, results: data.results.map(({ name }) => ({ name })) };
    }
}
