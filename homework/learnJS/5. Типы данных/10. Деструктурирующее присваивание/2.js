let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalary = (obj) => {
    return (Object.entries(obj).sort((a, b) => -a[1] + b[1])[0][0]) || null;
}

console.log(topSalary(salaries));