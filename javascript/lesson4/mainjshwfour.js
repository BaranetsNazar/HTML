// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function  rectangle(){
    let a = 2.5;
    let b = 3;
    return a * b;
}
let result = rectangle();
console.log (result);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function round(){
    let r = 3;
    let PI=3.14 ;
    return 2* r * PI;
}
let result1=round();
console.log (result1);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(){
    let r=4;
    let PI=3.14 ;
    let h=10;
    return 2*PI*r*(h+r);
}
let result2 = cylinder();
console.log(result2)
// - створити функцію яка приймає масив та виводить кожен його елемент
let nums = [11, 12, 22, 23, 33, 34, 44, 45, 55, 56];
function iteratorOfNumsByFunction(arr) {
    for (const ithem of arr) {
        console.log(ithem);
    }
}
iteratorOfNumsByFunction(nums);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(par){
    document.write(`<p>${par}</p>`)
}
ulli(`Love is in the air`);


// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
function ulli(arg){
    document.write(`<ul>`)
    document.write(`<li>${arg}</li>`)
    document.write(`<li>${arg}</li>`)
    document.write(`<li>${arg}</li>`)
    document.write(`</ul>`)
}
ulli(`Okten my life`);

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим
// (тут використовувати цикл)
function UlLiForThreePosition(text,counter){
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)
    }
        document.write(`</ul>`);
}
    UlLiForThreePosition(`JavaScript it's my night horror`, 3);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array = [1, `one`, 22, `twenty one`, true, 34, 44, false, 60];
function primitives (arrays){
    document.write(`<ul>`)
    for (let i = 0; i < arrays.length; i++) {
        document.write(`<li>${arrays[i]}</li>`)
    }
    document.write(`</ul>`);
}
primitives(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arrayOne = [{id: 1, name: 'Bogdan', age: 25}, {id: 2, name: 'Ostap', age: 35}, {id: 3, name: `Taras`, age: 15}];
function arrayByObject(array) {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}
arrayByObject (arrayOne);

