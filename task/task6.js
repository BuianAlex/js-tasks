'use strict';

/**
 * Красивый год
 *
 * А знали ли Вы забавный факт о том, что 2013 год является первым годом после далекого 1987 года,
 * в котором все цифры различны?
 *
 * Теперь же Вам предлагается решить следующую задачу: задан номер года, найдите наименьший номер года,
 * который строго больше заданного и в котором все цифры различны.
 *
 * Входные данные
 * В единственной строке задано целое число y (1000 ≤ y ≤ 9000) — номер года.
 *
 * Выходные данные
 * Выведите единственное целое число — минимальный номер года, который строго больше y, в котором все цифры различны.
 * Гарантируется, что ответ существует.
 */

var prettyYearTests = [
    {
        parameters: ["1987"],
        expectedResult: 2013
    },
    {
        parameters: ["2013"],
        expectedResult: 2014
    },
    {
        parameters: ["8796"],
        expectedResult: 8901
    }
];


function prettyYear(y) {
    //TODO
    let year= parseInt(y[3])+1;
    let decade = parseInt(y[2]);
    let century = parseInt(y[1]);
    let millennium = parseInt(y[0]);
    testYear();
    
    function testCentury(){
        if (century === 10) {
            century = 0;
            millennium++;
        }
        if (century === year) {
            testYear();
        }
        if (decade === century) {
            testDecade()
        }
        if (century === millennium){
            century++;
            testCentury();
        }
    } 
    
    function testDecade() {
        if (decade === 10) {
            decade = 0;
            century++;
        }
        if (decade === year){
            testYear() ;
        }
        if (decade === century) {
            decade++;
            testDecade();
        }
        if (decade === millennium) {
            decade++;
            testDecade();
        }
        else{
            testCentury()
        }       
    }
    
    function testYear() {
        if (year===10){
            year = 0;
            decade++;}
        if (year === decade){
            year++;
            testYear()}
        if (year === century){
            year ++;
            testYear();}
        if (year === millennium) {
            year ++;
            testYear();}
        else{
            testDecade()}    
    }
    return parseInt([millennium, century, decade, year].join(''));
}


tasks.push({
    title: "Красивый год",
    solution: prettyYear,
    tests: prettyYearTests
});
