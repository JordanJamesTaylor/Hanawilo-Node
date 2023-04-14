class Shape{
    constructor(name, sides, sidesLength){
        this.name = name;
        this.sides = sides;
        this.sidesLength = sidesLength;
    }

    calcPerimeter(){
        return this.sides * this.sidesLength;
    }
}

class Square extends Shape{
    constructor(sidesLength){
        super("square", 4, sidesLength);
    }

    calcArea(){
        return this.sidesLength * this.sidesLength;
    }
}

const squareOne = new Shape("square", 4, 5);
const triangle = new Shape("triangle", 3, 3);

squareOne.calcPerimeter();
triangle.calcPerimeter();

const squareTwo = new Square(8);

squareTwo.calcArea();
squareTwo.calcPerimeter();
