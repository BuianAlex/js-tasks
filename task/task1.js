'use strict';

/**
 * Числа Фиббоначи
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765
 * https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * Знайти суму перших n чисел фібоначі.
 */

var fibonacciTests = [
    {
        parameters: [1],
        expectedResult: 1
    },
    {
        parameters: [3],
        expectedResult: 4
    },
    {
        parameters: [5],
        expectedResult: 12
    },
    {
        parameters: [20],
        expectedResult: 17710
    },
    {
        parameters: [0],
        expectedResult: 0
    }
];


function fibonacci(n) {
    const fibonacciNumber = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];
    let fn=0;

    let sumNumb = 0;
    for (let index = 0; index < n; index++) {
        sumNumb = sum(fn, fibonacciNumber[index]);
        fn = sumNumb;        
    }
   function sum(fn,sn) {
       return fn+sn;     
   }
    return sumNumb;
}


tasks.push({
    title: "Числа Фиббоначи",
    solution: fibonacci,
    tests: fibonacciTests
});