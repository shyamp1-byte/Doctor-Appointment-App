function calculateCircleInfo(radius) {
    const pi = 3.14;
    let circumference=2*pi*radius;
    let area=pi*radius*radius;
    return {
        "Circumference ": circumference, "Area ": area
    }
}


console.log(calculateCircleInfo(50));
console.log(calculateCircleInfo(40));
console.log(calculateCircleInfo(30));
console.log(calculateCircleInfo(20));
console.log(calculateCircleInfo(10));