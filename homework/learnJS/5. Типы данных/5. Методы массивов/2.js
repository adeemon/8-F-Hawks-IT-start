const filterRange = (arr, a, b) => {
    return arr.filter((element) => {
        return element >= a && element <= b;
    })
}