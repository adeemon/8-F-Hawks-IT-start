const sumInput = () => {
    let numbers = [];

    while (true) {

        let value = prompt("Введите число", 0);
        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }
    let output = numbers.reduce((sum, element) => sum + element, 0);
    return output;
}