function printPattern(char, numLines) {
  let str = "";
  for (let i = 0; i < numLines; i++) {
    str = str + char;
    console.log(str);
  }
}

printPattern("A", 10);
