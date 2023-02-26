let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const getLetters = (word) => {
    return word.toLowerCase().split('').sort().join('');
}

const aclean = (wordsArray) => {
    let uniqueWords = new Set();
    let output = [];
    wordsArray.forEach(element => {
        uniqueWords.add(getLetters(element));
    });
    console.log(uniqueWords)
    wordsArray.forEach(element => {
        let elementLetters = getLetters(element);
        if (uniqueWords.has(elementLetters)) {
            output.push(element);
            uniqueWords.delete(elementLetters);
        }
    })
    return output;
}
console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"