

//print 100 to 50 reverse order

// for (let x=100; x>=50; x--) {
//     console.log(x);
// }


function rectangle(height,width) {
    const area = height * width;
    return {
        "Area: ": area
    }
}

for (let x=0; x<=100; x++) {
    console.log(rectangle(2,x));
}

