function shuffle(array) {
    var size = array.length;
    var rand;
    for (var i = 0; i < size; i += 1) {
      rand = Math.floor(i + Math.random() * (size - i));
      [array[rand], array[i]] = [array[i], array[rand]];
    }
    return array;
  }
