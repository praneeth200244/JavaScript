function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r},${g},${b})`;
    };

    color.hex = function() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    return color;
}

const firstColor = makeColor(0, 0, 0);
console.log(firstColor);
console.log(firstColor.rgb());
console.log(firstColor.hex() + "\n\n");

firstColor.g = 250;
console.log(firstColor.rgb() + "\n\n\n\n");

const secondColor = makeColor(40, 130, 150);
console.log(secondColor);
console.log(secondColor.rgb());
console.log(secondColor.hex());