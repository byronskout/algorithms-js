function anagrams(stringA, stringB) {
    const charCountA = charCount(stringA);
    const charCountB = charCount(stringB);

    if (Object.keys(charCountA).length !== Object.keys(charCountB).length)
        return false;

    for (let char in charCountA)
        if (charCountA[char] !== charCountB[char]) return false;

    return true;
};