'use strict';

/**
 * cAPS lOCK
 *
 * зАЧЕМ НУЖНА КЛАВИША cAPS lOCK?
 * Caps Lock — клавиша компьютерной клавиатуры, предназначенная для автоматической (постоянной) смены регистра
 * букв со строчных на прописные. Будучи случайно нажатой, она приводит к последствиям вроде первого абзаца в
 * условии этой задачи.
 *
 * Будем считать, что слово набрано с ошибочно нажатой клавишей Caps Lock, если:
 * - либо оно полностью состоит из прописных букв;
 * - либо прописными являются все его буквы, кроме первой.
 *
 * В таком случае, нужно автоматически поменять регистр всех букв на противоположный. Например,
 * регистр букв слов «hELLO», «HTTP», «z» должен быть изменен.
 * Напишите программу, которая применяет описанное выше правило или оставляет слово без изменения, если оно не применимо.
 *
 * Входные данные
 * записано слово, состоящее из прописных или строчных букв латинского алфавита. Длина слова — от 1 до 100 символов включительно.
 *
 * Выходные данные
 * Выведите результат обработки данного слова.
 */

var capsLockTests = [
    {
        parameters: ["cAPS"],
        expectedResult: "Caps"
    },
    {
        parameters: ["Lock"],
        expectedResult: "Lock"
    },
    {
        parameters: ["wHY DO wE NEED cAPS lOCK?"],
        expectedResult: "Why do We need Caps Lock?"
    },
    {
        parameters: ["FuNkY iS nOt CaPs!"],
        expectedResult: "FuNkY Is nOt CaPs!"
    }
];


function capsLock(str) {
    let words = str.split(/\s+/g);
    let result =[];
    let FuNkY = false;
    words.forEach((element)=>{
        let ww='';
        if (/^([A-Z][a-z]){1,}([!]*)/.test(element)){
            FuNkY =true
        }
        if (FuNkY ===true ){
            ww = element.replace(/^([a-z])([A-Z])([!]*)$/, function (match, p1, p2) {
                return [p1.toUpperCase(), p2.toLowerCase()].join('');
            })
        }
        else{
            ww = element
            .replace(/^([a-z])([A-Z]{1,})([!]*)/, function (match, p1, p2, p3) {
                return [p1.toUpperCase(), p2.toLowerCase()].join('');
            })
            .replace(/^([A-Z])([A-Z]{1,})([!]*)/, function (match, p1, p2, p3) {
                return [p1.toLowerCase(), p2.toLowerCase()].join('');
            })
        } 
        result.push(ww); 
    });
    return result.join(' ');
    //TODO
}
capsLock("FuNkY iS nOt CaPs!");

tasks.push({
    title: "cAPS lOCK",
    solution: capsLock,
    tests: capsLockTests
});
