const items = new WeakMap()

class Stack {
    constructor() {
        items.set(this, [])
    }

    push(element) {
        const s = items.get(this)
        s.push(element)
    }

    pop() {
        const s = items.get(this)
        const r = s.pop()
        return r
    }

    //outros métodos
}
