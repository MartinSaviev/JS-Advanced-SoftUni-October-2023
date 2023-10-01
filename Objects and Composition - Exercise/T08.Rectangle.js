function rectangle(width, height, color) {

    let changeColorString = color.substring(0, 1).toUpperCase() + color.substring(1);

    let rect = {
        width,
        height,
        color: changeColorString,
        calcArea() {
            return sum = this.width * this.height;

        },
    };
    return rect

}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea()); 