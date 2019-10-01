function reverseString(str) {
  let string = str.split("").reduce((result, character) => character + result);
  return string;
}
