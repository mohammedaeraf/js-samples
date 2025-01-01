let n = 5;
let remainder = n % 3;

switch (remainder) {
  case 0: //  if(remainder == 0)
    console.log("It is divisible by 3");
    break;
  case 1:
    console.log("It is not divisible because the remainder is 1");
    break;
  default:
    console.log("It is not divisible because the remainder is 2");
    break;
}
