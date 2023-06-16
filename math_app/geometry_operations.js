
const calculateCircleInfo=(radius)=>{
    const pi = 3.14;
    let circumference=2*pi*radius;
    let area=pi*radius*radius;
    return {
        "Circumference ": circumference, "Area ": area
    }
}

const calculateSqareInfo=(side)=>{
    return {
        "area": side*side
    }
}

module.exports={
    calculateCircleInfo,
    calculateSqareInfo
}