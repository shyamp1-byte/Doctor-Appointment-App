class Grandmother {
    grandmotherAssets() {
        console.log("Car");
        car = "Audi"
        house = "Brick House"
        toothbrush = "Black"
    }
}
class Mother extends Grandmother {
    motherAssets() {
        console.log("Gold");
        console.log("Dress");
        console.log("Bike");
    }
}
class Child extends Mother{
    childAssets() {
        console.log("Schoolbag");
        console.log("Books");
        console.log("Toy");
    }
}

const objChild = new Child();
objChild.childAssets();
objChild.motherAssets();
objChild.grandmotherAssets();