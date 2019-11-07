function isLetter(str) {
  return str.length === 1 && str.match(/[a-zA-Z]/i);
}

function isUpperCase(character) {
  if (character == character.toUpperCase()) {
    return true;
  }
  if (character == character.toLowerCase()) {
    return false;
  }
}
