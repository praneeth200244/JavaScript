function Color(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
}

Color.prototype.hsl = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Color.prototype.rgba = function (a=1) {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b},${a})`;
}

const firstColor = new Color(255,120,125);
console.log(firstColor.rgb())
firstColor.r = 152;
console.log(firstColor.hsl())
console.log(firstColor.rgba())