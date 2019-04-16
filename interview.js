//Q1. Write a function that takes a string as input and returns the string reversed.
const reverStr = (str) => {
    const strToArray = [...str]
    return strToArray.reduce((acc, i) => i + acc, '')
}

console.log(reverStr('Hello'))

//Q2. Given a positive integer num, write a function which returns True if num is a perfect square else False.
const isPerfectSquare = (num) => {
    for (let i = 1; i * i <= num; i++) {
        if (i * i === num) {
            return true
            break;
        }
    }
    return false
}
console.log(isPerfectSquare(4))

// Q3. Given a set of non-overlapping intervals, insert a new interval into the intervals(merge if necessary).
// You may assume that the intervals were initially sorted according to their start times.
const mergeInterval = (...args) => (interval) => {
    let newIntervalList = [...args]
    const result = []
    for (let i = 0; i < args.length; i++) {
        if (args[i][0] > interval[0]) {
            newIntervalList.splice(i, 0, interval);
        }
    }
    for (let i = 0; i < newIntervalList.length; i++) {
        if (result.length === 0 || result[result.length - 1][1] < newIntervalList[i][0]) {
            result.push(newIntervalList[i])
        } else {
            let newEndOfInterval = Math.max(result[result.length - 1][1], newIntervalList[i][1])
            result[result.length - 1] = [result[result.length - 1][0], newEndOfInterval]
        }
    }
    return result
}

console.log(mergeInterval([1, 2], [3, 5], [6, 7], [8, 10], [12, 16])([4, 9]))

// Q4. Given a 2D board and a word, find if the word exists in the grid.
const isInGrid = (grid) => (str = '') => {
    const strToArray = [...str]
    const flatGrid = grid.reduce((acc,row)=> [...acc,...row],[]);
    const table = {}
    flatGrid.forEach((word) => {
        if(table[word] === undefined){
          table[word] = 1
        }else {
           table[word] = table[word] + 1
        }
    })
    strToArray.forEach((word) => {
        table[word] = table[word] - 1
    })
    return strToArray.every((word) => table[word] >= 0)
}

console.log(isInGrid( [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
])('ABCB'))

console.log(isInGrid('ABCB'))

// Q5. Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
const addTwoNumber = (x, y) => {
    while (y != 0) {
        let carry = x & y;
        x = x ^ y;
        y = carry << 1;
    }
    return x;
}

console.log(addTwoNumber(2, 3))