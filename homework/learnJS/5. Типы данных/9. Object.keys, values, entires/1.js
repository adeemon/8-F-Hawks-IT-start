let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (obj) => {
    return Object.values(obj).reduce((summ, element) => summ + element, 0);
}

alert(sumSalaries(salaries)); // 650