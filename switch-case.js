let marks = 77;

let grade;
let result;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 70) {
  grade = "B";
} else if (marks >= 50) {
  grade = "C";
} else if (marks >= 40) {
  grade = "D";
} else {
  grade = "E";
}
console.log(`Your grade - ${grade}.`);

// switch-case
switch (grade) {
  case "A": // if(grade == 'A')
    console.log("You scored distinction");
    break;
  case "B":
    console.log("You scored first class");
    break;
  case "C":
    console.log("You scored second class");
    break;
  case "D":
    console.log("You scored third class");
    break;
  default:
    console.log("You failed");
    break;
}






