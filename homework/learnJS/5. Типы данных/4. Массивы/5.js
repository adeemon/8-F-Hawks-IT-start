function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let number of arr) {
        currentSum += number;
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) currentSum = 0;
    }

    return maxSum;
}