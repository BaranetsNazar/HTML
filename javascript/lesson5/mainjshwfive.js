// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника
 let rectangleSquare = (a,b)=> a*b;
console.log(rectangleSquare(10,5));
document.write('Площа: ' + rectangleSquare(10, 5) );


// - створити функцію яка обчислює та повертає площу кола
let roundSquare = (r,Pi) =>{
    return 2*r*Pi;
};
console.log(roundSquare(5,3.14));
document.write('Площа кола: ' + roundSquare(5, 3,14) );


// - створити функцію яка обчислює та повертає площу циліндру
let celinderSquare = (r,h,Pi) =>{
    return 2*r*h*Pi;
};
console.log(celinderSquare(5,2,3.14));
document.write(`Площа циліндру:` +celinderSquare(5,2,3.14));

// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [11, '=', 11, true, `or`, false];
 const dataArray = (array) => {
     for (let i=0; i<array.length; i++) {
                document.write(array[i]);
     }
 }
dataArray(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayMasuv = [1, `one`, 22, `twenty one`, true, 34, 44, false, 60];
// const primitives = (array) => {
document.write(`<ol>`)

//         for (let i = 0; i < array.length; i++) {
//             document.write(`<li>${array[i]}</li>`);
//         }
//     document.write(`</ol>`)
// }
// primitives(anyArray);
function primitives (arrays){
    document.write(`<ul>`)
    for (let i = 0; i < arrays.length; i++) {
        document.write(`<li>${arrays[i]}</li>`)
    }
    document.write(`</ul>`);
}
primitives(arrayMasuv);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrayOne = [{id: 1, name: 'Bogdan', age: 25}, {id: 2, name: 'Ostap', age: 35}, {id: 3, name: `Taras`, age: 15}];
const objArray = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}
objArray(arrayOne);