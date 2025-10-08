export class Cache {
    #cache = new Map();
    #reapIntervalId = undefined;
    #interval;
    constructor(interval) {
        this.#interval = interval;
        this.#startReapLoop();
    }
    add(key, val) {
        if (!this.#cache.has(key)) {
            this.#cache.set(key, { createdAt: Date.now(), val: val });
        }
    }
    get(key) {
        const cache = this.#cache.get(key);
        if (!cache)
            return undefined;
        return cache.val;
    }
    #reap() {
        for (const [key, val] of this.#cache) {
            if (val.createdAt <= Date.now() - this.#interval) {
                this.#cache.delete(key);
            }
        }
    }
    #startReapLoop() {
        if (this.#reapIntervalId)
            return;
        this.#reapIntervalId = setInterval(() => {
            this.#reap();
        }, this.#interval);
    }
    stopReapLoop() {
        if (!this.#reapIntervalId)
            return;
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}
