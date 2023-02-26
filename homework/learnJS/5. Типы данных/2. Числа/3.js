const readNumber = () => {
    let input = null;
    do {
        input = prompt('Input number');
    } while (!isFinite(input))
    if (input === null || input === '') return null;
    return +input;
}