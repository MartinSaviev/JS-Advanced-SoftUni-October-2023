class Circle {
    constructor(radius) {

        this.radius = radius;

    }
    get area() {
        return Math.PI * this.radius ** 2;
    };

    set area(value) {
        this.radius = area / value;
    }
}

let circle = new Circle(2);
console.log(circle.area);
circle.radius = 3;
circle.area = 20;
console.log(circle.area)


