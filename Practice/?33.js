// Check whether string is palindrome or not

string = "abcdcba";
flag = true;
j = 6;
i = 0;
while (i < (string.length / 2)) {
  if (string[i] == string[j]) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
  break;
}
