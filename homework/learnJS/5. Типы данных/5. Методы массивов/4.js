let arr = [5, 2, 1, -10, 8];

const sort = (arr) => {
    return arr.sort((a, b) => b - a);
}

arr = sort(arr);

alert(arr); // 8, 5, 2, 1, -10