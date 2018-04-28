class Canvas {
    constructor(id, w, h) {
        const c = document.createElement('canvas');
        c.id = id;
        c.width = w;
        c.height = h;

        const ctx = c.getContext('2d');

        this.id = id;
        this.c = c;
        this.ctx = ctx;
    }

    append(to = document.body) {
        to.appendChild(this.c); 
    }

    remove(from = document.body) {
        from.removeChild(this.c);
    }

    getContext() {
        return this.ctx;
    }

    resize(w, h) {
        const { c } = this;

        c.width = w;
        c.heigth = h;
    }
}

export default Canvas;
