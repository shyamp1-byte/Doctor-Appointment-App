// Print Fibonacci series
a = 0
b = 1
console.log(a)
console.log(b)
for (i = 1; i < 10; i++) {
    i = a + b
    console.log(i)
    a = b
    b = i
}