// Find sum of natural numbers using recursion

function display(i, sum) {
  if (i < 10) {
    sum = sum + i;
    i = i + 1;
    sum = display(i, sum);
  }
  return sum
}
sum = display(1, 0);
console.log(sum)
