function vowels(string) {
    let count = 0;
    const choices = "aeiou";
    
    for (let character of string.toLowerCase())
        if (choices.includes(character)) count++;
    
    return count;
};