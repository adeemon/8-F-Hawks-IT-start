let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const countTotalSalary = (obj) => {
    let sum = 0;
    let arrSum = Object.values(obj).reduce((out, elem) => out + elem, 0);
    return sum + arrSum;
}

let sum = countTotalSalary(salaries);