export type CacheEntry<T> = {
    createdAt: number,
    val: T
}

export class Cache {

    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number) {
        this.#interval = interval

        this.#startReapLoop()
    }

    add<T>(key: string, val: T): void{

        if (!this.#cache.has(key)){

            this.#cache.set(key, {createdAt: Date.now(), val: val})

        }

    }

    get<T>(key: string): T | undefined {

        const cache = this.#cache.get(key)

        if (!cache) return undefined

        return cache.val

    }

    #reap(){

        for (const [key, val] of this.#cache) {

            if (val.createdAt <= Date.now() - this.#interval) {
                this.#cache.delete(key)
            }

        }

    }

    #startReapLoop(){

        if (this.#reapIntervalId) return

        this.#reapIntervalId = setInterval(() => {
            this.#reap()
        }, this.#interval)
        
    }

    stopReapLoop(){

        if (!this.#reapIntervalId) return

        clearInterval(this.#reapIntervalId)

        this.#reapIntervalId = undefined
        
    }
}