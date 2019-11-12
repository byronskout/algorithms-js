function countingSort(array, min, max) {
    let i;
    let z = 0;
    const count = [];
    
    for (i = min; i <= max; i++) {
      count[i] = 0;
    }
    
    for (i = 0; i < array.length; i++) {
      count[array[i]]++;
    }
    
    for (i = min; i <= max; i++) {
      while (count[i]-- > 0) {
        array[z++] = i;
      }
    }
    
    return array;
  }
  
  const array = [4, 1, 5, 2, 3, 0];


console.log(countingSort(array, 0, 5));