class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    innerRgb() {
        const { r, g } = this;
        return `${r},${g},${this.b}`;
    }

    rgb() {
        const { r, g, b } = this;
        return `rgb(${this.innerRgb()})`;
    }

    rgba(a = 0.5) {
        const { r, g, b } = this;
        return `rgba(${this.innerRgb()},${a})`;
    }

    hsl() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

const white = new Color(255, 255, 255, 'white');
const black = new Color(0, 0, 0, 'black');

console.log(white.rgb());
console.log(black.rgba());
console.log(black.hsl());
