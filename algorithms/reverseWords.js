function reverseWords(string) {
    const wordsReversed = [];

    string.split(" ").forEach(word => {
        let wordReversed = "";
        for (let i = word.length - 1; i >= 0; i--) wordReversed += word[i];
        wordsReversed.push(wordReversed);
    });

    return wordsReversed.join(" ");
};