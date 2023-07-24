// Display fib sequence using recursion

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

const a = 10

for(let i = 0; i < a; i++) {
    console.log(fibonacci(i));
}