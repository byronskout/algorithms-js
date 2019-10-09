function capitalize(p) {
    const words = [];

    for (let word of p.split(" "))
        words.push(word[0].toUpperCase() + word.slice(1));

    return words.join(" ");
};