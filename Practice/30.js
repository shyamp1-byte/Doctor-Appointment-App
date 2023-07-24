// Display factorial of number using recursion
function display(i, mult, a) {
  if (i <= a) {
    mult = mult * i;
    i = i + 1;
    mult = display(i, mult, a);
  }
return mult;
}
mult = display(1, 1, 5);
console.log(mult)